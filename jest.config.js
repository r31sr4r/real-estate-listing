module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    moduleNameMapper: {
      "^axios$": "<rootDir>/src/__mocks__/axios.js",
    },    
  };
  