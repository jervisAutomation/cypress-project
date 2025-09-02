import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import path from "path";

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // ✅ Setup the Cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // ✅ Register esbuild preprocessor
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // ✅ Ensure test results are saved to a JSON file
      config.env = {
        ...config.env,
        "cucumber-preprocessor": {
          json: {
            enabled: true,
            output: path.join("cypress", "cucumber-report", "report.json"),
          },
        },
      };

      return config;
    },
    baseUrl: "https://www.saucedemo.com/", // Or your target base URL
  },
});
