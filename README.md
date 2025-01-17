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

| Prop                 | Type                    | Default  | Description                          |
| -------------------- | ----------------------- | -------- | ------------------------------------ |
| value                | string                  | ""       | Text to display and edit             |
| isEditing            | boolean                 | false    | Initial editing state                |
| inputType            | string                  | "text"   | Type of input field                  |
| label                | string                  | ""       | Label for the input                  |
| className            | string                  | ""       | Container class name                 |
| inputClassName       | string                  | ""       | Input field class name               |
| editButtonClassName  | string                  | ""       | Edit button class name               |
| editWrapperClassName | string                  | ""       | Edit mode wrapper class name         |
| saveButtonLabel      | React.ReactNode         | "Save"   | Custom save button label             |
| editButtonLabel      | React.ReactNode         | "Edit"   | Custom edit button label             |
| onEditButtonClick    | () => void              | () => {} | Callback when edit button is clicked |
| onInputChange        | (value: string) => void | () => {} | Callback when input value changes    |
| onSaveButtonClick    | () => void              | () => {} | Callback when save button is clicked |

Plus styling props:

- `className`
- `inputClassName`
- `editButtonClassName`
- `editWrapperClassName`

And customization props:

- `saveButtonLabel` (default: "Save")
- `editButtonLabel` (default: "Edit")

## 💡 Example with All Features

```tsx
<InputClickEdit
  value="Click me to edit"
  label="Username"
  inputType="text"
  saveButtonLabel="✅ Done"
  editButtonLabel="✏️ Edit"
  className="my-editor"
  onInputChange={(value) => console.log("New value:", value)}
  onSaveButtonClick={() => console.log("Saved!")}
/>
```

## 📄 License

MIT
