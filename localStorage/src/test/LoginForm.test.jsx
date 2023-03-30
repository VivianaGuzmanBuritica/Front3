import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe("LoginForm testing - renders and events", () => {
    test("Title must be rendered", () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe loguearse/i)
        expect(title).toBeDefined()
    })
    test("First input must be rendered", () => {
        render(<LoginForm/>)
        const email = screen.getByRole('email')
        expect(email).toBeDefined()
    })
    test("Second input must change correctly", () => {
        render(<LoginForm/>)
        const pass = screen.getByTestId('password')
        fireEvent.change(pass, {target: {value: "contraseña123"}})
        expect(pass.value).toBe("contraseña123")
    })
    test("Button must be rendered", () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const btn = screen.getByText("Enviar")
        fireEvent.click(btn)
        expect(handleClick).toBeCalledTimes(1)
    })
})
