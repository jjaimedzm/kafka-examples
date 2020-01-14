const request = require("request");

module.exports.req = async function req(url) {
  return new Promise((resolve, reject) => {
    request(url, function(err, response, body) {
      if (err) reject;
      resolve(body);
    });
  });
};
