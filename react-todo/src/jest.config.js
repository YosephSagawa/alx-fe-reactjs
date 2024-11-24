module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(module-to-transform)/)",
  ],
};
