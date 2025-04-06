/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // ✅ change from "node" to "jsdom" for React component tests
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
transform: {
  "^.+\\.(ts|tsx)$": ["ts-jest", {
    tsconfig: "tsconfig.jest.json" // <--- This is the file Jest uses
  }],
},
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    // Use the manual mock instead:
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
};
