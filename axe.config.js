// const reporter = function (results, options, callback) {
//   console.log("HERRE");
//   callback(results);
// };
const config = {
  reporter: function (results, options, callback) {
    console.log("HERRE");
    callback(results);
  },
};
module.exports = config;
