import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { site, type SiteContent } from "@/content/site";

const STORAGE_KEY = "portfolio-content-overlay-v2";

type ContentContextValue = {
  content: SiteContent;
  isCustom: boolean;
  setContent: (next: SiteContent) => void;
  reset: () => void;
  exportJson: () => string;
  importJson: (raw: string) => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

function cloneSite(): SiteContent {
  return structuredClone(site);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(site);
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as SiteContent;
      if (parsed && parsed.profile && parsed.projects) {
        setContentState(parsed);
        setIsCustom(true);
      }
    } catch {
      /* ignore corrupt overlay */
    }
  }, []);

  const persist = useCallback((next: SiteContent) => {
    setContentState(next);
    setIsCustom(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const reset = useCallback(() => {
    const fresh = cloneSite();
    setContentState(fresh);
    setIsCustom(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const exportJson = useCallback(() => JSON.stringify(content, null, 2), [content]);

  const importJson = useCallback(
    (raw: string) => {
      const parsed = JSON.parse(raw) as SiteContent;
      if (!parsed?.profile?.name || !Array.isArray(parsed.projects)) {
        throw new Error("Invalid content file");
      }
      persist(parsed);
    },
    [persist],
  );

  const value = useMemo(
    () => ({
      content,
      isCustom,
      setContent: persist,
      reset,
      exportJson,
      importJson,
    }),
    [content, isCustom, persist, reset, exportJson, importJson],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
