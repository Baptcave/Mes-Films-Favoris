import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    },
    specPattern: "src/components/**/*.cy.{js,jsx,ts,tsx}"
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  }
});
