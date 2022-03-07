// yarn add jest jest-dom @testing-library/jest-dom @testing-library/react babel-jest -D

module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTest.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
};
