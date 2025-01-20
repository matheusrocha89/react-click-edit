# @nobrainers/react-click-edit 📝

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

## 🚀 Quick Start

```tsx
import { InputClickEdit } from "@nobrainers/react-click-edit";

function App() {
  const [name, setName] = useState("John Doe");

  return <InputClickEdit value={name} onInputChange={setName} />;
}
```

## 🔧 Props

| Prop                 | Type                    | Default              | Description                                 |
| -------------------- | ----------------------- | -------------------- | ------------------------------------------- |
| value                | string                  | ""                   | Text to display and edit                    |
| isEditing            | boolean                 | false                | Initial editing state                       |
| inputType            | string                  | "text"               | HTML input type (text, number, email, etc.) |
| label                | string                  | ""                   | Label for the input field                   |
| className            | string                  | ""                   | Container class name                        |
| inputClassName       | string                  | ""                   | Input field class name                      |
| editButtonClassName  | string                  | ""                   | Edit button class name                      |
| saveButtonClassName  | string                  | ""                   | Save button class name                      |
| editWrapperClassName | string                  | ""                   | Edit mode wrapper class name                |
| saveButtonLabel      | React.ReactNode         | "Save"               | Custom save button label                    |
| editButtonLabel      | React.ReactNode         | "Edit"               | Custom edit button label                    |
| showIcons            | boolean                 | false                | Toggle button icons visibility              |
| editIcon             | React.ElementType       | () => `<LuPencil />` | Custom edit icon component                  |
| saveIcon             | React.ElementType       | () => `<LuCheck />`  | Custom save icon component                  |
| iconPosition         | "left" \| "right"       | "left"               | Position of icons in buttons                |
| onEditButtonClick    | () => void              | () => {}             | Callback when edit button is clicked        |
| onInputChange        | (value: string) => void | () => {}             | Callback when input value changes           |
| onSaveButtonClick    | () => void              | () => {}             | Callback when save button is clicked        |

## 💡 Examples

### Basic Usage

```tsx
function BasicExample() {
  const [name, setName] = useState("John Doe");
  return <InputClickEdit value={name} onInputChange={setName} />;
}
```

### With Label and Number Input

```tsx
<InputClickEdit
  label="Age"
  inputType="number"
  value="25"
  onInputChange={(value) => console.log(value)}
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
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("Control me");

  return (
    <InputClickEdit
      value={value}
      isEditing={isEditing}
      onEditButtonClick={() => setIsEditing(true)}
      onSaveButtonClick={() => setIsEditing(false)}
      onInputChange={setValue}
    />
  );
}
```

## 🎨 Styling

The component comes with minimal default styling and can be fully customized using CSS classes. All main elements accept custom class names through props.

Example with CSS modules:

```tsx
import styles from "./styles.module.css";

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
