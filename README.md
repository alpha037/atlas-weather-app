# Weather Forecast Web Application.

<p> A minimalist asynchronous weather application. </p>

#### Deployed at: http://alpha-weatherapp.herokuapp.com/

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

To run the app as a docker container, follow the given steps:

- Navigate to the project directory
  ```bash
  cd Asynchronous-Weather-App
  ```
- Replace <strong>USERNAME</strong> with your own username and build the docker image
  ```bash
  docker build -t <USERNAME>Asynchronous-Weather-App:1.0 .
  ```
- Open up the terminal at the project directory, replace <strong>USERNAME</strong> with your own username and run the following command:
  ```bash
  docker run -p 3000:3000 <USERNAME>/Asynchronous-Weather-App:1.0
  ```
- You can also use <strong>docker compose</strong> to manage your containers:
  ```bash
  docker-compose up
  ```
  and
  ```bash
  docker-compose down
  ```
