const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7cd09fa535cf323ba309b475afdc5fc0&query=${latitude}, ${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable To Connect", undefined);
    } else if (body.code === 601) {
      callback("Please enter coordinates", undefined);
    } else {
      // console.log("response", response.body);
      callback(undefined, body.current.weather_descriptions[0]);
    }
  });
};

module.exports = forecast;
