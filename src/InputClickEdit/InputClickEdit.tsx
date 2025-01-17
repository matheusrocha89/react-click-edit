import { useState } from "react";
import cn from "classnames";

import styles from "./InputClickEdit.module.css";

type InputClickEditProps = {
  className?: string;
  isEditing: boolean;
  inputClassName?: string;
  editButtonClassName?: string;
  editWrapperClassName?: string;
  value?: string;
  saveButtonLabel?: React.ReactNode;
  editButtonLabel?: React.ReactNode;
  label?: string;
  inputType?: string;
  onEditButtonClick?: () => void;
  onInputChange?: (value: string) => void;
  onSaveButtonClick?: () => void;
};

const InputClickEdit = ({
  className = "",
  inputClassName = "",
  editButtonClassName = "",
  editWrapperClassName = "",
  value = "",
  inputType = "text",
  isEditing = false,
  saveButtonLabel = "Save",
  editButtonLabel = "Edit",
  label = "",
  onEditButtonClick = () => {},
  onInputChange = () => {},
  onSaveButtonClick = () => {},
}: InputClickEditProps) => {
  const [editing, setEditing] = useState<boolean>(isEditing);
  const onEditClick = () => {
    setEditing(true);
    onEditButtonClick?.();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(e.target.value);
  };

  const handleSave = () => {
    setEditing(false);
    onSaveButtonClick?.();
  };

  const inputProps = {
    className: inputClassName,
    onChange,
    value,
    type: inputType,
  };

  return (
    <div className={className}>
      {editing ? (
        <div className={cn(styles.editWrapper, editWrapperClassName)}>
          {label ? (
            <label>
              {label}
              <input {...inputProps} />
            </label>
          ) : (
            <input {...inputProps} />
          )}
          <button onClick={handleSave}>{saveButtonLabel}</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button className={editButtonClassName} onClick={onEditClick}>
            {editButtonLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export { InputClickEdit };
export type { InputClickEditProps };
