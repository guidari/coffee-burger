export default {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/tests/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.test.{tsx}",
    "!src/**/*.stories.tsx",
    "!src/**/App.tsx",
    "!src/**/Router.tsx",
    "!src/**/main.tsx",
  ],
  coverageReporters: ["json", "lcov"],
  testEnvironment: "jsdom",
};
