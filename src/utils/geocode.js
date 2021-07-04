const request = require("request");

const geocode = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) callback("Unable to connect to location services.", undefined);
    else if (body.features.length === 0)
      callback(
        "Unable to find the specified location. Please try again.",
        undefined
      );
    else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        place: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
