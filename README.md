# @nobrainers/react-click-edit 📝

## 🎥 Demo

https://github.com/user-attachments/assets/58c8cca5-878a-4e64-aa06-a8e202318f2a

> A lightweight, easy-to-use React component that makes any text editable with a click!

## ✨ Features

- 🎯 Simple and intuitive API
- 🎨 Fully customizable styling
- 🔄 Controlled component
- 🚀 TypeScript support
- 🎨 Custom icons support
- 📝 Label support
- 🔤 Multiple input types

## 📦 Installation

```bash
npm install @nobrainers/react-click-edit
```

### CSS Import

The component requires its base CSS file to be imported. Add the following import to your application:

```tsx
import "@nobrainers/react-click-edit/dist/style.css";
```

## 🚀 Quick Start

```tsx
import { InputClickEdit } from "@nobrainers/react-click-edit";

function App() {
  const [name, setName] = useState("John Doe");

  return <InputClickEdit value={name} onChange={setName} />;
}
```

## 🔧 Props

| Prop              | Type                                 | Required | Default  | Description                               |
| ----------------- | ------------------------------------ | -------- | -------- | ----------------------------------------- |
| value             | string                               | Yes\*    | -        | Controlled text value to display and edit |
| defaultValue      | string                               | No       | -        | Initial uncontrolled value                |
| type              | string                               | No       | "text"   | HTML input type attribute                 |
| onChange          | ChangeEventHandler<HTMLInputElement> | Yes\*    | -        | HTML input onChange handler               |
| isEditing         | boolean                              | No       | false    | Control the editing state                 |
| label             | string                               | No       | ""       | Label for the input field                 |
| className         | string                               | No       | ""       | Container class name                      |
| editButtonLabel   | React.ReactNode                      | No       | "Edit"   | Custom edit button label                  |
| saveButtonLabel   | React.ReactNode                      | No       | "Save"   | Custom save button label                  |
| showIcons         | boolean                              | No       | false    | Toggle button icons visibility            |
| iconsOnly         | boolean                              | No       | false    | Show only icons without text labels       |
| editIcon          | React.ElementType                    | No       | LuPencil | Custom edit icon component                |
| saveIcon          | React.ElementType                    | No       | LuCheck  | Custom save icon component                |
| iconPosition      | "left" \| "right"                    | No       | "left"   | Position of icons in buttons              |
| onEditButtonClick | () => void                           | No       | () => {} | Callback when edit button is clicked      |
| onSaveButtonClick | () => void                           | No       | () => {} | Callback when save button is clicked      |

\*Either `value` + `onChange` (controlled) or `defaultValue` (uncontrolled) must be provided.

## 💡 Examples

### Basic Usage

```tsx
function BasicExample() {
  const [name, setName] = useState("John Doe");
  return <InputClickEdit value={name} onChange={setName} />;
}
```

### With Label and Number Input

```tsx
<InputClickEdit
  label="Age"
  type="number"
  value="25"
  onChange={(value) => console.log(value)}
/>
```

### With Icons and Custom Styling

```tsx
<InputClickEdit
  value="Click me to edit"
  showIcons
  iconPosition="right"
  className="container"
  inputClassName="custom-input"
  saveButtonClassName="save-btn"
  editButtonClassName="edit-btn"
  editWrapperClassName="edit-wrapper"
/>
```

### Custom Icons and Labels

```tsx
import { FiEdit } from "react-icons/fi";
import { FiSave } from "react-icons/fi";

<InputClickEdit
  value="Custom everything"
  showIcons
  editIcon={FiEdit}
  saveIcon={FiSave}
  editButtonLabel="Modify"
  saveButtonLabel="Update"
/>;
```

### Controlled Editing State

```tsx
function ControlledExample() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Control me");

  return (
    <InputClickEdit
      value={value}
      isEditing={isEditing}
      onEditButtonClick={() => setIsEditing(true)}
      onSaveButtonClick={() => setIsEditing(false)}
      onChange={setValue}
    />
  );
}
```

### With Icons Only

```tsx
<InputClickEdit
  value="Icons only"
  showIcons
  iconsOnly
  editIcon={FiEdit}
  saveIcon={FiSave}
/>
```

### React Hook Form Integration

```tsx
import { useForm, Controller } from "react-hook-form";
import { InputClickEdit } from "@nobrainers/react-click-edit";

function FormExample() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="editableText"
        control={control}
        defaultValue="Edit me"
        render={({ field }) => (
          <InputClickEdit {...field} onChange={field.onChange} />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Register Example

```tsx
import { useForm } from "react-hook-form";
import { InputClickEdit } from "@nobrainers/react-click-edit";

function RegisterExample() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputClickEdit {...register("editableText")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🎨 Styling

The component comes with minimal default styling through its base CSS file. You can override these styles or add additional styling using CSS classes. All main elements accept custom class names through props.

### Default Styling

Import the default styles in your application:

```tsx
import "@nobrainers/react-click-edit/dist/style.css";
```

### Custom Styling

Example with CSS modules:

```tsx
import "@nobrainers/react-click-edit/dist/style.css"; // Base styles
import styles from "./styles.module.css"; // Your custom styles

<InputClickEdit
  className={styles.wrapper}
  inputClassName={styles.input}
  editButtonClassName={styles.editButton}
  saveButtonClassName={styles.saveButton}
  editWrapperClassName={styles.editingWrapper}
/>;
```

## 📄 License

MIT
