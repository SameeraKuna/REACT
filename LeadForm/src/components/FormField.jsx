export default function FormField({
  label,
  required = false,
  optional = false,
  error,
  ...props
}) {
  return (
    <div className="field">
      <label className="field-label">
        <span>{label}</span>
        <span className="field-meta">
          {required ? "(required)" : optional ? "(optional)" : ""}
        </span>
      </label>

      <input className={`input ${error ? "input-error" : ""}`} {...props} />

      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}