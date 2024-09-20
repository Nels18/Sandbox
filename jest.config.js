module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  coverageReporters: ["html", "text"],
  collectCoverageFrom: [
    "!src/**/*.ts",
    "!src/main.ts",
    "!src/*.config.ts",
    "!src/*.routes.ts",
    "!src/*.mock.ts",
  ],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
  transformIgnorePatterns: ["node_modules/?!(.*\\.mjs$|flat/)"],
};
