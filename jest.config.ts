/**
 * ini ibarat global setup/ panduan sebelum memulai test
 */

import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
	dir: "./", // path ke root next.js
});

const customJestConfig: Config = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // setting ini untuk ditujukkan jalan file jest.setup dulu sebelum test jalan
	testEnvironment: "jest-environment-jsdom",
	// folder atau file yg ditangkap
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/hooks/(.*)$": "<rootDir>/hooks/$1",
		"^@/utils/(.*)$": "<rootDir>/utils/$1",
		"^@/pages/(.*)$": "<rootDir>/pages/$1",
	},
};

export default createJestConfig(customJestConfig);
