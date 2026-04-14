export default function StatusBanner({
  type = "info",
  message,
  actions,
}) {
  if (!message) return null;

  return (
    <div className={`status-banner ${type}`} role="status" aria-live="polite">
      <div className="status-message">{message}</div>

      {actions?.length ? (
        <div className="status-actions">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className={`status-action ${action.variant || "secondary"}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}