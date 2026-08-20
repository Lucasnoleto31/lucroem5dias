const inputCls =
  "h-12 w-full rounded border border-edge-strong bg-surface px-4 text-body text-text-strong " +
  "placeholder:text-neutral-500 transition-[border-color] duration-150 ease-out " +
  "focus:border-neutral-300 focus:outline-none focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-primary-500";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
};

export function TextField({
  label,
  name,
  error,
  ...rest
}: BaseProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${name}-erro`;
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-body-sm font-medium text-text-default"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`${inputCls} ${error ? "border-danger" : ""}`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  name,
  error,
  options,
  ...rest
}: BaseProps & { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const errorId = `${name}-erro`;
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-body-sm font-medium text-text-default"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22%239c968c%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M4%206l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${error ? "border-danger" : ""}`}
        {...rest}
      >
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
