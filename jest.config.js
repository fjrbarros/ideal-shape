module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.styles.*",
    "!src/main.tsx",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.setup.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|webp)$": "<rootDir>/.jest/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "@components": "<rootDir>/src/components",
    "@pages": "<rootDir>/src/pages",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
