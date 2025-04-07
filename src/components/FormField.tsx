import * as React from "react";
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  error?: string;
  register: any;
  autoComplete?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  error,
  register,
  autoComplete,
}) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      id={name}
      type={type}
      className="form-control"
      autoComplete={autoComplete}
      {...register(name)}
    />
    {error && <div className="text-danger">{error}</div>}
  </div>
);

export default FormField;
