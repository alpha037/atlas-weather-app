const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${
    process.env.WEATHERSTACK_ACCESS_KEY
  }&query=${encodeURIComponent(latitude)},${encodeURIComponent(
    longitude
  )}&units=m`;

  request({ url, json: true }, (error, { statusCode, body }) => {
    if (error || !statusCode || !body)
      callback("Unable to connect to weather forecast services.", undefined);
    else if (statusCode !== 200)
      callback(
        "Unable to find the specified location. Please try again after some time.",
        undefined
      );
    else {
      callback(undefined, {
        localtime: body.location.localtime,
        summary: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
        precipProbability: body.current.precip,
        humidity: body.current.humidity,
        imageSrc: body.current.weather_icons[0],
      });
    }
  });
};

module.exports = forecast;
