// generate-report.js
const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-report',  // path to JSON reports
  reportPath: 'cypress/cucumber-report/html', // output HTML path
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'GitHub Actions CI',
    platform: {
      name: 'ubuntu',
      version: 'latest',
    },
  },
});
