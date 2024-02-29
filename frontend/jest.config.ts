export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    // pour utiliser des alias de chemin, comme dans tsconfig.json
    "@/(.*)$": "<rootDir>/src/$1",

    // mocking assests and styling
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.ts",
    /* mock models and services folder */
    "(assets|models|services)": "<rootDir>/__mocks__/fileMock.ts"
  },
  coverageReporters: ["text", "text-summary"],
  modulePaths: ["<rootDir>"]
};
