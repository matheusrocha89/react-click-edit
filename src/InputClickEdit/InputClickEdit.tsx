import { useState, useEffect } from "react";
import { LuPencil } from "react-icons/lu";
import { LuCheck } from "react-icons/lu";
import cn from "classnames";

import styles from "./InputClickEdit.module.css";

type InputClickEditProps = {
  className?: string;
  isEditing?: boolean;
  inputClassName?: string;
  editButtonClassName?: string;
  saveButtonClassName?: string;
  editWrapperClassName?: string;
  value?: string;
  saveButtonLabel?: React.ReactNode;
  editButtonLabel?: React.ReactNode;
  label?: string;
  inputType?: string;
  showIcons?: boolean;
  editIcon?: React.ElementType;
  saveIcon?: React.ElementType;
  iconPosition?: "left" | "right";
  iconsOnly?: boolean;
  onEditButtonClick?: () => void;
  onInputChange?: (value: string) => void;
  onSaveButtonClick?: () => void;
};

const InputClickEdit = ({
  className = "",
  inputClassName = "",
  editButtonClassName = "",
  saveButtonClassName = "",
  editWrapperClassName = "",
  value = "",
  inputType = "text",
  isEditing = false,
  saveButtonLabel = "Save",
  editButtonLabel = "Edit",
  label = "",
  showIcons = false,
  saveIcon,
  editIcon,
  iconsOnly = false,
  iconPosition = "left",
  onEditButtonClick = () => {},
  onInputChange = () => {},
  onSaveButtonClick = () => {},
}: InputClickEditProps) => {
  const [editing, setEditing] = useState<boolean>(isEditing);
  useEffect(() => {
    setEditing(isEditing);
  }, [isEditing]);
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
    className: cn(styles.input, inputClassName),
    onChange,
    value,
    type: inputType,
  };
  const buttonBaseClassName = {
    [styles.button]: true,
    [styles.buttonReverse]: iconPosition === "right",
  };

  const EditIcon = editIcon || LuPencil;
  const SaveIcon = saveIcon || LuCheck;

  return (
    <div className={cn(styles.wrapper, className)}>
      {editing ? (
        <div className={cn(styles.contentWrapper, editWrapperClassName)}>
          {label ? (
            <label>
              {label}
              <input {...inputProps} />
            </label>
          ) : (
            <input {...inputProps} />
          )}
          <button
            data-testid="action-button"
            className={cn(buttonBaseClassName, saveButtonClassName)}
            onClick={handleSave}
            aria-label={iconsOnly ? saveButtonLabel?.toString() : undefined}
          >
            {(showIcons || iconsOnly) && <SaveIcon data-testid="save-icon" />}
            {!iconsOnly && saveButtonLabel}
          </button>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <span>{value}</span>
          <button
            data-testid="action-button"
            className={cn(buttonBaseClassName, editButtonClassName)}
            onClick={onEditClick}
            aria-label={iconsOnly ? editButtonLabel?.toString() : undefined}
          >
            {(showIcons || iconsOnly) && <EditIcon data-testid="edit-icon" />}
            {!iconsOnly && editButtonLabel}
          </button>
        </div>
      )}
    </div>
  );
};

export { InputClickEdit };
export type { InputClickEditProps };
