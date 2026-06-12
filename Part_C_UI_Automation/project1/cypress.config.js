const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '1d42bc',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
  screenshotOnRunFailure: true, // التقاط صورة عند الفشل
    video: true,
  }
});