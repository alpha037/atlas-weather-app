const path = require("path");

const express = require("express");
const hbs = require("hbs");

// Before doing this, check the .env.example file
const ENV_PATH = path.join(__dirname, "../config/.env");
require("dotenv").config({ path: ENV_PATH });

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../view/views");
const partialsPath = path.join(__dirname, "../view/partials");

app.use(express.static(publicDirectoryPath));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Routing to app.com/weather
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You have to provide a valid address.",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, place } = {}) => {
    if (error) return res.send({ error });

    forecast(
      latitude,
      longitude,
      (
        error,
        {
          localtime,
          summary,
          temperature,
          feelsLike,
          precipProbability,
          humidity,
          imageSrc,
        } = {}
      ) => {
        if (error) return res.send({ error });

        if (parseInt(feelsLike) != parseInt(temperature))
          return res.send({
            location: place,
            localtime,
            forecast: `${summary}.
          It is currently ${temperature}°C out. Although, it feels like ${feelsLike}°C. The humidity is ${humidity}%.`,
          });
        else if (precipProbability)
          return res.send({
            location: place,
            localtime,
            forecast: `${summary}.
        It is currently ${temperature}°C out. Although, it feels like ${feelsLike}°C. There is a ${precipProbability}% chance of rainfall and the humidity is ${humidity}%.`,
          });
        else
          return res.send({
            location: place,
            localtime,
            forecast: `${summary}.
        It is currently ${temperature}°C out. The humidity is ${humidity}%.`,
            imageSrc: imageSrc.toString(),
          });
      }
    );
  });
});

// Root route -> app.com
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Forecast",
    about: "A minimalist asynchronous weather application.",
    data: "Alpha Inc.",
  });
});

// Routing to app.com/about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

// Routing to app.com/help
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    content:
      "Use this web app to find out the weather of any place in real time.",
    instructions:
      "Just type in the name of the place in the search bar and see the magic happen.",
  });
});

// Matching any route which comes under app.com/help/....
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404: Page Not Found - Help",
    content: "The help article you're looking for cannot be found",
  });
});

// Matching any route except the above mentioned routes
app.get("*", (req, res) => {
  res.render("404", {
    title: "404 - Page Not Found",
    content: "The page you're looking cannot be found",
  });
});

app.listen(port, () => console.log(`Server is up and running at ${port}.`));
