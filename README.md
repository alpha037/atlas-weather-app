<a href="https://atlas.shubhranil.com" target="\_blank">
<img src="https://img.shields.io/badge/Developed%20and%20Maintained%20by-Atlas%20Inc-blue">
</a>

# Atlas Weather-App

<p> A minimalist asynchronous weather application. </p>

#### Deployed at: http://weather.shubhranil.com/

#### Help:

<p> You can use this web app to find out the weather of any place in real time. Just type in the name of the place in the search bar and see the magic happen. </p>

### Features include:

<ul>
  <li> Complete location of the searched place. </li>
  <li> Local time of the place, Date and the present weather forecast in that region. </li>
  <li> Autocomplete feature powered by Google Places API (sometimes it won't work due to API traffic or daily API calls limit or a number of   other reasons) and Weather based real-time icons (if available). </li>
</ul>

### Docker Instructions

If you haven't installed [Docker](https://www.docker.com/products/docker-desktop) already, then you can get it from [here](https://www.docker.com/products/docker-desktop). After installing it, create an account in Docker and copy the username.

Before running this application in docker, make sure to replace the **API KEYS** placeholder with your own.

This application is already dockerized. You can pull the image directly from [docker hub](https://hub.docker.com/u/alpha037):

```bash
docker pull alpha037/atlas-weather-app
```

**OR**

You can create your own by following the given steps.

To run the app as a docker container, follow the given steps:

- Navigate to the project directory
  ```bash
  cd atlas-weather-app
  ```
- Replace <strong>USERNAME</strong> with your own username and build the docker image
  ```bash
  docker build -t <USERNAME>/atlas-weather-app:1.0 .
  ```
- Open up the terminal at the project directory, replace <strong>USERNAME</strong> with your own username and run the following command:
  ```bash
  docker run -p 3000:3000 <USERNAME>/atlas-weather-app:1.0
  ```
- You can also use <strong>docker compose</strong> to manage your containers:
  ```bash
  docker-compose up
  ```
  and
  ```bash
  docker-compose down
  ```
