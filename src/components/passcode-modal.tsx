import { useState, useEffect, useRef } from "react";
import { Lock, ShieldCheck, X, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface PasscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const CORRECT_PIN = "282482";
export const AUTH_STORAGE_KEY = "studio_unlocked";

export function isStudioUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_STORAGE_KEY) === CORRECT_PIN;
}

export function lockStudio(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function PasscodeModal({ isOpen, onClose, onSuccess }: PasscodeModalProps) {
  const [pin, setPin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setPin("");
      setIsError(false);
      setIsSuccess(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  function verifyPin(inputToVerify: string) {
    const cleaned = inputToVerify.trim();
    if (cleaned === CORRECT_PIN) {
      setIsSuccess(true);
      setIsError(false);
      sessionStorage.setItem(AUTH_STORAGE_KEY, CORRECT_PIN);
      setTimeout(() => {
        onClose();
        if (onSuccess) {
          onSuccess();
        } else {
          navigate({ to: "/studio" });
        }
      }, 400);
    } else {
      setIsError(true);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    verifyPin(pin);
  }

  function handleDigitClick(d: string) {
    if (pin.length >= 10 || isSuccess) return;
    const nextPin = pin + d;
    setPin(nextPin);
    setIsError(false);
    if (nextPin === CORRECT_PIN) {
      verifyPin(nextPin);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-up">
      <div
        className="relative w-full max-w-sm rounded-[var(--radius-xl)] border border-slate-200/90 bg-surface p-6 shadow-2xl border border-border transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Header Icon */}
        <div className="flex flex-col items-center text-center">
          <div
            className={`flex size-14 items-center justify-center rounded-2xl transition-all duration-300 ${
              isSuccess
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : isError
                  ? "bg-red-50 text-red-500 border border-red-200"
                  : "bg-blue-50 text-accent border border-blue-100 shadow-sm"
            }`}
          >
            {isSuccess ? <ShieldCheck className="size-7" /> : <Lock className="size-7" />}
          </div>

          <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
            {isSuccess ? "Akses Diterima" : "Verifikasi Passcode"}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            {isSuccess
              ? "Membuka Content Studio..."
              : "Masukkan passcode 6-digit untuk membuka Content Studio"}
          </p>
        </div>

        {/* Form with Real Input Box */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div className="relative">
            <input
              ref={inputRef}
              type={showPassword ? "text" : "password"}
              value={pin}
              onChange={(e) => {
                const val = e.target.value;
                setPin(val);
                setIsError(false);
                if (val.trim() === CORRECT_PIN) {
                  verifyPin(val);
                }
              }}
              placeholder="Masukkan passcode..."
              className={`h-12 w-full rounded-xl border px-4 pr-12 text-center font-mono text-lg tracking-wider text-fg transition-all focus:outline-none ${
                isError
                  ? "border-red-500 bg-red-50/50 animate-shake focus:ring-2 focus:ring-red-300"
                  : isSuccess
                    ? "border-emerald-500 bg-emerald-50/40 text-emerald-700"
                    : "border-border bg-surface-2/60 focus:border-accent focus:bg-white focus:ring-2 focus:ring-blue-100"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
              title={showPassword ? "Sembunyikan" : "Tampilkan"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>

          {isError && (
            <p className="text-center text-xs font-medium text-red-500 animate-fade-up">
              Passcode salah! Silakan coba lagi.
            </p>
          )}

          <button
            type="submit"
            disabled={isSuccess}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent font-medium text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50"
          >
            Buka Studio
            <ArrowRight className="size-4" />
          </button>
        </form>

        {/* Quick Touch Keypad */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-center text-[10px] font-mono text-faint uppercase tracking-wider mb-2">
            Keypad Sentuh
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => handleDigitClick(digit)}
                className="flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent"
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setPin("");
                setIsError(false);
              }}
              className="flex h-10 items-center justify-center rounded-lg font-mono text-xs font-medium text-muted hover:bg-slate-100 hover:text-fg"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => handleDigitClick("0")}
              className="flex h-10 items-center justify-center rounded-lg border border-border bg-surface-2/70 font-mono text-base font-semibold text-fg shadow-2xs transition-all active:scale-95 hover:bg-blue-50 hover:border-blue-200 hover:text-accent"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => {
                if (pin.length > 0) {
                  setPin(pin.slice(0, -1));
                  setIsError(false);
                }
              }}
              className="flex h-10 items-center justify-center rounded-lg font-mono text-xs text-muted hover:bg-slate-100 hover:text-fg"
            >
              Del
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
