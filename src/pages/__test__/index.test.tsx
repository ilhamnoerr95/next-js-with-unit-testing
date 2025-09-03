import { render } from "@testing-library/react";
import HomePage from "@/pages/home";

describe("HomePage", () => {
	it.each(["Submit", "Cancel", "Delete"])(
		"should render Button with correct label: %s",
		(label) => {
			const { getByRole } = render(<HomePage />);

			// cek teks dari Button
			const button = getByRole("button", { name: label });
			expect(button).toBeInTheDocument();
		},
	);

	it("should render heading correctly", () => {
		const { getByText } = render(<HomePage />);
		expect(getByText("Welcome")).toBeInTheDocument();
	});
});
