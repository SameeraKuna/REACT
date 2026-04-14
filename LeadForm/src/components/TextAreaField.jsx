export default function TextAreaField({
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

      <textarea
        className={`input textarea ${error ? "input-error" : ""}`}
        {...props}
      />

      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}