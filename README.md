# @nobrainers/react-click-edit 📝

> A lightweight, easy-to-use React component that makes any text editable with a click!

## ✨ Features

- 🎯 Simple and intuitive API
- 🎨 Fully customizable styling
- 🔄 Controlled component
- 🚀 TypeScript support

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

| Prop                 | Type                    | Default        | Description                           |
| -------------------- | ----------------------- | -------------- | ------------------------------------- |
| value                | string                  | ""             | Text to display and edit              |
| isEditing            | boolean                 | false          | Initial editing state                 |
| inputType            | string                  | "text"         | Type of input field                   |
| label                | string                  | ""             | Label for the input                   |
| className            | string                  | ""             | Container class name                  |
| inputClassName       | string                  | ""             | Input field class name                |
| editButtonClassName  | string                  | ""             | Edit button class name                |
| saveButtonClassName  | string                  | ""             | Save button class name                |
| editWrapperClassName | string                  | ""             | Edit mode wrapper class name          |
| saveButtonLabel      | React.ReactNode         | "Save"         | Custom save button label              |
| editButtonLabel      | React.ReactNode         | "Edit"         | Custom edit button label              |
| showIcons            | boolean                 | false          | Show icons in buttons                 |
| editIcon             | React.ReactNode         | `<LuPencil />` | Custom edit icon                      |
| saveIcon             | React.ReactNode         | `<LuCheck />`  | Custom save icon                      |
| iconPosition         | "left" \| "right"       | "left"         | Position of icons in buttons          |
| onEditButtonClick    | () => void              | () => {}       | Callback when edit button is clicked  |
| onInputChange        | (value: string) => void | () => {}       | Callback when input value changes     |
| onSaveButtonClick    | () => void              | () => {}       | Callback when save button is clicked  |
| justIcons            | boolean                 | false          | Show only icons without button labels |

## 💡 Examples

### Basic Usage

```tsx
<InputClickEdit value={name} onInputChange={setName} />
```

### With Icons

```tsx
<InputClickEdit
  value="Click me to edit"
  showIcons
  iconPosition="right"
  saveButtonClassName="save-btn"
  editButtonClassName="edit-btn"
/>
```

### Custom Icons

```tsx
<InputClickEdit
  value="Custom icons"
  showIcons
  editIcon={<span>✍️</span>}
  saveIcon={<span>👍</span>}
/>
```

### Icons Only (No Text Labels)

```tsx
<InputClickEdit
  value="Icons only buttons"
  justIcons
  editIcon={<span>✎</span>}
  saveIcon={<span>✓</span>}
/>
```

## 📄 License

MIT
