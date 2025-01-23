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

  return <InputClickEdit value={name} onInputChange={setName} />;
}
```

## 🔧 Props

| Prop                 | Type                    | Default  | Description                                 |
| -------------------- | ----------------------- | -------- | ------------------------------------------- |
| value                | string                  | ""       | Text to display and edit                    |
| isEditing            | boolean                 | false    | Initial editing state                       |
| inputType            | string                  | "text"   | HTML input type (text, number, email, etc.) |
| label                | string                  | ""       | Label for the input field                   |
| className            | string                  | ""       | Container class name                        |
| inputClassName       | string                  | ""       | Input field class name                      |
| editButtonClassName  | string                  | ""       | Edit button class name                      |
| saveButtonClassName  | string                  | ""       | Save button class name                      |
| editWrapperClassName | string                  | ""       | Edit mode wrapper class name                |
| saveButtonLabel      | React.ReactNode         | "Save"   | Custom save button label                    |
| editButtonLabel      | React.ReactNode         | "Edit"   | Custom edit button label                    |
| showIcons            | boolean                 | false    | Toggle button icons visibility              |
| iconsOnly            | boolean                 | false    | Show only icons without text labels         |
| editIcon             | React.ElementType       | LuPencil | Custom edit icon component                  |
| saveIcon             | React.ElementType       | LuCheck  | Custom save icon component                  |
| iconPosition         | "left" \| "right"       | "left"   | Position of icons in buttons                |
| onEditButtonClick    | () => void              | () => {} | Callback when edit button is clicked        |
| onInputChange        | (value: string) => void | () => {} | Callback when input value changes           |
| onSaveButtonClick    | () => void              | () => {} | Callback when save button is clicked        |

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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>("Control me");

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
