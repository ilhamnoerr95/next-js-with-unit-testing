import LoginPage from "./index";

import { render, fireEvent } from "@testing-library/react";

describe("Login Page", () => {
	it("should fill username, password and click login button", () => {
		const { getByLabelText, getByRole } = render(<LoginPage />);

		// ambil input dulu
		const usernameInput = getByLabelText(/Enter username/i);
		const passwordInput = getByLabelText(/Your Password/i);
		const loginButton = getByRole("button", { name: /login/i });

		// isi input, gak usah mikir input harus sama, yg penting alurnya bener.
		// isi input -> klik button
		fireEvent.change(usernameInput, { target: { value: "myusername" } });
		fireEvent.change(passwordInput, { target: { value: "asdqwe123" } });

		// assertion
		expect(usernameInput).toHaveValue("myusername");
		expect(passwordInput).toHaveValue("asdqwe123");
		// expect((usernameInput as HTMLInputElement).value).toBe("myusername");
		// expect((passwordInput as HTMLInputElement).value).toBe("asdqwe123");

		// klik button harus disabled dan ada loading
		fireEvent.click(loginButton);
		// expect(getByRole("button", { name: /load.../i })).toBeDisabled();
		expect(loginButton).toBeDisabled();
		expect(loginButton).toHaveTextContent(/loading.../i);
	});
});
