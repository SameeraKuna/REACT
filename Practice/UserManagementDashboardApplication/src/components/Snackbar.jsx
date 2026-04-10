import { useEffect } from "react";

export default function Snackbar({
  open,
  message,
  type = "error",
  onClose,
  onRetry
}) {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={`snackbar ${type}`}>
      <span>{message}</span>

      <div>
        {onRetry && <button onClick={onRetry}>Retry</button>}
        <button onClick={onClose}>✖</button>
      </div>
    </div>
  );
}