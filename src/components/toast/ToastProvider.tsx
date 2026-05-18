import { Check, X } from "@phosphor-icons/react";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ToastType = "success" | "error";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

type ConfirmToast = {
  id: number;
  message: string;
  resolve: (confirmed: boolean) => void;
};

type ToastContextValue = {
  success: (message: string) => void;
  error: (message: string) => void;
  confirm: (message: string) => Promise<boolean>;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

function ToastIcon({ type }: { type: ToastType }) {
  const Icon = type === "success" ? Check : X;

  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${
        type === "success" ? "bg-zinc-950 dark:bg-emerald-500" : "bg-red-500"
      }`}
    >
      <Icon size={16} weight="bold" />
    </span>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [confirmToast, setConfirmToast] = useState<ConfirmToast | null>(null);

  function show(message: string, type: ToastType) {
    const id = Date.now();

    setToasts((currentToasts) => [...currentToasts, { id, message, type }]);

    window.setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }

  function confirm(message: string) {
    return new Promise<boolean>((resolve) => {
      setConfirmToast({ id: Date.now(), message, resolve });
    });
  }

  function closeConfirm(confirmed: boolean) {
    confirmToast?.resolve(confirmed);
    setConfirmToast(null);
  }

  const value = useMemo(
    () => ({
      success: (message: string) => show(message, "success"),
      error: (message: string) => show(message, "error"),
      confirm,
    }),
    [],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className="fixed left-1/2 top-6 z-[9999] flex w-[min(92vw,534px)] -translate-x-1/2 flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white px-6 py-6 text-zinc-950 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:shadow-black/30"
            role="status"
          >
            <ToastIcon type={toast.type} />
            <strong className="text-lg font-semibold leading-snug">{toast.message}</strong>
          </div>
        ))}
      </div>

      {confirmToast && (
        <div className="fixed inset-0 z-[9998] flex items-start justify-center bg-zinc-950/10 px-4 pt-6 backdrop-blur-[1px] dark:bg-black/30">
          <div
            className="w-[min(92vw,534px)] rounded-xl border border-zinc-100 bg-white px-6 py-6 text-zinc-950 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:shadow-black/30"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start gap-4">
              <ToastIcon type="success" />

              <div className="flex-1">
                <strong className="block text-lg font-semibold leading-snug">
                  {confirmToast.message}
                </strong>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => closeConfirm(false)}
                    className="rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    onClick={() => closeConfirm(true)}
                    className="rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-blue-700 hover:to-cyan-600"
                  >
                    Desligar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
