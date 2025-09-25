import "whatwg-fetch"; // polyfill fetch biar stabil.

// import { server } from "@/mocks/server";

/**
 * ini file untuk alat yg disiapkan untuk digunakan test
 *
 */

import "@testing-library/jest-dom"; // supaya bisa pakai expect(...).toBeInTheDocument()

import { TextEncoder, TextDecoder } from "util";

if (!global.TextEncoder) {
	global.TextEncoder = TextEncoder as any;
}
if (!global.TextDecoder) {
	global.TextDecoder = TextDecoder as any;
}
// // Start server before all tests
// beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// //
// // Reset handlers after each test (biar test tidak saling ganggu)
// afterEach(() => server.resetHandlers());

// // Close server after all tests
// afterAll(() => server.close());
