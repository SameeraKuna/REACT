export default function SelectField({
  label,
  required = false,
  optional = false,
  error,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
}) {
  return (
    <div className="field">
      <label className="field-label">
        <span>{label}</span>
        <span className="field-meta">
          {required ? "(required)" : optional ? "(optional)" : ""}
        </span>
      </label>

      <select
        className={`input ${error ? "input-error" : ""}`}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}