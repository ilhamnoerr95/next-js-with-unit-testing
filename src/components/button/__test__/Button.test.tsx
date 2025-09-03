import { render } from "@testing-library/react";
import Button from "../index";

describe("Button", () => {
	it("Menampilkan props label", () => {
		const { getByText } = render(<Button label="Test" />);

		expect(getByText("Test")).toBeInTheDocument();
	});
});
