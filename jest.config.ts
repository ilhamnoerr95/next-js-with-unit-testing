import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
	dir: "./", // path ke root next.js
});

const customJestConfig: Config = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/pages/(.*)$": "<rootDir>/pages/$1",
	},
};

export default createJestConfig(customJestConfig);
