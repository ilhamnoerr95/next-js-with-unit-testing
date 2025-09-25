import LoginPage from "./index";

import { render, fireEvent, waitFor } from "@testing-library/react";

// ini satu rangkaian alur login
// user mengisi username, password, lalu klik tombol login
// ketika tombol login diklik, tombol akan disabled dan ada loading
// setelah 2 detik, tombol kembali enable dan text loading hilang
describe("Login Page", () => {
	it("should fill username, password and click login button", async () => {
		const { getByLabelText, getByRole } = render(<LoginPage />);

		// ambil input dulu
		const usernameInput = getByLabelText(/Enter username/i);
		const passwordInput = getByLabelText(/Your Password/i);
		const loginButton = getByRole("button", { name: /login/i });

		// isi input, gak usah mikir input harus sama, yg penting alurnya bener.
		// isi input -> klik button -> button loading dan disabled -> 2 detik kemudian button enable dan loading hilang
		fireEvent.change(usernameInput, { target: { value: "myusername" } });
		fireEvent.change(passwordInput, { target: { value: "asdqwe123" } });

		// assertion
		// expect(usernameInput).toHaveValue("myusername");
		// expect(passwordInput).toHaveValue("asdqwe123");
		expect((usernameInput as HTMLInputElement).value).toBe("myusername");
		expect((passwordInput as HTMLInputElement).value).toBe("asdqwe123");

		// klik button harus disabled dan ada loading
		fireEvent.click(loginButton);
		// expect(getByRole("button", { name: /loading.../i })).toBeDisabled();
		expect(loginButton).toBeDisabled();
		expect(loginButton).toHaveTextContent(/loading/i);

		// Tunggu API selesai
		// await waitFor(() => expect(loginButton).not.toBeDisabled());
		// expect(loginButton).toHaveTextContent(/login/i);
	});
});
