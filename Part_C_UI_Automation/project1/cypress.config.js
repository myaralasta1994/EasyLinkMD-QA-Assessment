const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '1d42bc',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // ربط الصور والفيديوهات
    },
    baseUrl: 'https://www.saucedemo.com',
    screenshotOnRunFailure: true,
    video: true,
  }
});