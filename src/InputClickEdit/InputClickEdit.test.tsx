import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { useForm } from "react-hook-form";
import { InputClickEdit } from "./InputClickEdit";

describe("InputClickEdit", () => {
  describe("Rendering", () => {
    it("should render with default props", () => {
      render(<InputClickEdit />);
      expect(screen.getByText("Edit")).toBeInTheDocument();
    });

    it("should render with initial value", () => {
      render(<InputClickEdit value="Test Value" />);
      expect(screen.getByText("Test Value")).toBeInTheDocument();
    });

    it("should render with label when provided", () => {
      render(<InputClickEdit label="Name" isEditing />);
      const label = screen.getByText("Name");
      expect(label).toBeInTheDocument();
      expect(label.closest("label")).toContainElement(
        screen.getByRole("textbox")
      );
    });
  });

  describe("Editing Mode", () => {
    it("should enter edit mode when edit button is clicked", () => {
      render(<InputClickEdit value="Initial" />);
      fireEvent.click(screen.getByText("Edit"));
      expect(screen.getByRole("textbox")).toBeInTheDocument();
      expect(screen.getByText("Save")).toBeInTheDocument();
    });

    it("should start in edit mode when isEditing is true", () => {
      render(<InputClickEdit isEditing value="Test" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("should exit edit mode when save button is clicked", () => {
      render(<InputClickEdit value="Test" />);
      fireEvent.click(screen.getByText("Edit"));
      fireEvent.click(screen.getByText("Save"));
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    });
  });

  describe("Callbacks", () => {
    it("should call onEditButtonClick when edit button is clicked", () => {
      const onEditButtonClick = vi.fn();
      render(<InputClickEdit onEditButtonClick={onEditButtonClick} />);
      fireEvent.click(screen.getByText("Edit"));
      expect(onEditButtonClick).toHaveBeenCalled();
    });

    it("should call onInputChange when input value changes", () => {
      const onChange = vi.fn();
      const mockEventChange = { target: { value: "New Value" } };
      render(<InputClickEdit isEditing onChange={onChange} />);
      fireEvent.change(screen.getByRole("textbox"), mockEventChange);

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: "New Value" }),
        })
      );
    });

    it("should call onSaveButtonClick when save button is clicked", () => {
      const onSaveButtonClick = vi.fn();
      render(
        <InputClickEdit isEditing onSaveButtonClick={onSaveButtonClick} />
      );
      fireEvent.click(screen.getByText("Save"));
      expect(onSaveButtonClick).toHaveBeenCalled();
    });
  });

  describe("Icons", () => {
    it("should show icons when showIcons is true", () => {
      render(<InputClickEdit showIcons />);
      expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
    });

    it("should position icons correctly based on iconPosition", () => {
      const { getByTestId, rerender } = render(
        <InputClickEdit showIcons iconPosition="right" />
      );

      const buttonWrapper = getByTestId("action-button");
      expect(buttonWrapper.className).toContain("buttonReverse");

      rerender(<InputClickEdit showIcons iconPosition="left" />);
      expect(buttonWrapper.className).not.toContain("buttonReverse");
    });

    it("should render custom icons when provided", () => {
      const CustomEditIcon = () => <span data-testid="custom-edit">✎</span>;
      const CustomSaveIcon = () => <span data-testid="custom-save">✎</span>;

      const { rerender } = render(
        <InputClickEdit showIcons editIcon={CustomEditIcon} />
      );
      expect(screen.getByTestId("custom-edit")).toBeInTheDocument();
      expect(screen.queryByTestId("custom-save")).not.toBeInTheDocument();

      rerender(
        <InputClickEdit
          showIcons
          isEditing={true}
          editIcon={CustomEditIcon}
          saveIcon={CustomSaveIcon}
        />
      );

      expect(screen.queryByTestId("custom-edit")).not.toBeInTheDocument();
      expect(screen.getByTestId("custom-save")).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    it("should apply custom class names", () => {
      const { container } = render(
        <InputClickEdit
          className="custom-wrapper"
          inputClassName="custom-input"
          editButtonClassName="custom-edit-btn"
          saveButtonClassName="custom-save-btn"
          editWrapperClassName="custom-edit-wrapper"
        />
      );
      expect(container.querySelector(".custom-wrapper")).toBeInTheDocument();
      expect(container.querySelector(".custom-edit-btn")).toBeInTheDocument();
    });
  });

  describe("Input Types", () => {
    it("should render different input types", () => {
      render(<InputClickEdit isEditing type="number" />);
      expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    });
  });

  describe("Custom Labels", () => {
    it("should render custom button labels", () => {
      render(
        <InputClickEdit editButtonLabel="Modify" saveButtonLabel="Update" />
      );
      expect(screen.getByText("Modify")).toBeInTheDocument();
    });
  });

  describe("Controlled Mode", () => {
    it("should update value only when controlled value prop changes", () => {
      const { rerender } = render(<InputClickEdit value="Initial" isEditing />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "New Value" } });
      expect(input).toHaveValue("Initial"); // Should not change without prop update

      rerender(<InputClickEdit value="Updated" isEditing />);
      expect(input).toHaveValue("Updated");
    });
  });

  describe("Uncontrolled Mode", () => {
    it("should initialize with defaultValue", () => {
      render(<InputClickEdit defaultValue="Default" isEditing />);
      expect(screen.getByRole("textbox")).toHaveValue("Default");
    });

    it("should maintain internal state when uncontrolled", () => {
      render(<InputClickEdit defaultValue="Initial" isEditing />);
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "New Value" } });
      expect(input).toHaveValue("New Value");
    });
  });

  describe("React Hook Form Compatibility", () => {
    const TestForm = () => {
      const { register, watch } = useForm({
        defaultValues: {
          test: "Initial",
        },
      });
      const value = watch("test");

      return (
        <form>
          <InputClickEdit {...register("test")} value={value} isEditing />
        </form>
      );
    };

    it("should work with react-hook-form register", async () => {
      render(<TestForm />);
      const input = screen.getByRole("textbox");

      expect(input).toHaveValue("Initial");
      fireEvent.input(input, { target: { value: "Updated" } });

      await waitFor(() => {
        expect(input).toHaveValue("Updated");
      });
    });
  });

  describe("Ref Handling", () => {
    it("should forward ref to input element", () => {
      const ref = vi.fn();
      render(<InputClickEdit ref={ref} isEditing />);

      expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
    });

    it("should maintain ref after toggling edit mode", () => {
      const ref = { current: null };
      const { rerender } = render(<InputClickEdit ref={ref} />);

      fireEvent.click(screen.getByText("Edit"));
      expect(ref.current).toBeInstanceOf(HTMLInputElement);

      fireEvent.click(screen.getByText("Save"));
      rerender(<InputClickEdit ref={ref} />);
      fireEvent.click(screen.getByText("Edit"));
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });
});
