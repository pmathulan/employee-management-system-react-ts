import * as React from "react";
import styles from "../styles/Form.module.css";

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
  <div className={styles.formGroup}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input
      id={name}
      type={type}
      className={styles.input}
      autoComplete={autoComplete}
      {...register(name)}
    />
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default FormField;
