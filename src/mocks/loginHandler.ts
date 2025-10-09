import { http, HttpResponse } from "msw";

export const handlers = [
	http.post("/api/login", async ({ request }) => {
		// Simulasi delay 2 detik
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const body = await request.json();
		const { username, password } = body as {
			username: string;
			password: string;
		};
		if (username === "john_doe" && password === "secret123") {
			return HttpResponse.json({ token: "mock-token-123" }, { status: 200 });
		}

		return HttpResponse.json(
			{ message: "Invalid credentials" },
			{ status: 401 },
		);
	}),
];
