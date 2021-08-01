const AxeBuilder = require("@axe-core/webdriverjs");
const WebDriver = require("selenium-webdriver");
const config = require("./axe.config");

const driver = new WebDriver.Builder().forBrowser("chrome").build();

// driver.get("http://127.0.0.1:5500/testHTML.html").then(() => {
//   new AxeBuilder(driver)
//     .analyze()
//     .then((results) => {
//       console.log(results.violations);
//     })
//     .catch((e) => {
//       throw error;
//     });
// });

driver.get("http://127.0.0.1:5500/testHTML.html").then(() => {
  new AxeBuilder(driver)
    // .addReporter(
    //   "my-reporter",
    //   function (results, options, callback) {
    //     // do stuff...
    //     console.log("HERE");
    //     callback(results);
    //   },
    //   true
    // )
    .configure(config)
    .analyze((err, results) => {
      if (err) {
        throw err;
      }
      // console.log(customReporter);
      // console.log(results);
    });
});
