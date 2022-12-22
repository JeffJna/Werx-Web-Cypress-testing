const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "npmahs",
    // reporter: "mochawesome",
    // reporterOptions: {
    //   reportDir: "cypress/results",
    //   overwrite: false,
    //   html: true,
    //   json: true,
    // },
    browser: "chrome",
    video: true,
    screenshot: true,
    baseUrl: "https://www.preprod.backoffice.merx.tech/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
