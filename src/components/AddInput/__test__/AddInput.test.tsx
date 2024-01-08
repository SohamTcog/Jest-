import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    // Ensures that the AddInput component renders an input element.
    it('should render input element', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    // Checks if the input element in the AddInput component allows users to type into it.
    it('should be able to type into input', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) as HTMLInputElement; //added in typescript
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, { target: { value: "Create React Project" } });
        expect(inputElement.value).toBe("Create React Project");
    });

    // Verifies that clicking the "Add" button after typing into the input triggers a callback function
    it('should call the setTodos function when add button is clicked', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, { target: { value: "Create React Project" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement);
        expect(mockedSetTodo).toBeCalled();
    });

    // Ensures that the input is empty after clicking the "Add" button
    it('should have empty input when add button is clicked', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) as HTMLInputElement; //added in typescript
        fireEvent.change(inputElement, { target: { value: "Create React Project" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.click(buttonElement);
    
        // Check if value is an empty string
        expect(inputElement.value).toBe("");
    });       
    
});
