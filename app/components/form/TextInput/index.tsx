import React, { ReactElement, useState } from "react";
import styles from "./../form.module.css";

export interface Props {
  id: string;
  label: string;
  type: any;
  placeholder?: string;
}
export default function TextInput({
  id,
  label,
  placeholder,
}: Props): ReactElement {
  const [inputError] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className={`${styles.defaultStyle} ${inputError && styles.errorStyle}`}
        placeholder={placeholder}
      />
      {inputError && <p className="text-xs text-danger">Error message</p>}
    </div>
  );
}
