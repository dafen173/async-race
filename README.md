# Async Race App

## This project built with `Javascript`.

## [DEMO version of the application](https://dafen173.github.io/async-race/client/dist/)

<br>

### Backend Server (provided by [RS-School](https://github.com/mikhama/async-race-api) has been deployed [here](https://async-race-backend-d5kb.onrender.com/))

<br>
<hr>
<br>

## To run the application locally

<br>

### Start server side:
[LOOK HERE](https://github.com/mikhama/async-race-api)

<br>

### Start client side:
After cloning this repository install Dependencies first.
Client side dependencies by running in the `client` directory,  you can run:
#### `npm install`

then run a command in the `client` directory:
#### `npm start`

then in the `client/dist/index.html` file run a command
#### Open with Live Server
with using `Live Server Extension`

<br>

### Runs the app:<br>
Open [http://localhost:5500/client/dist/index.html](http://127.0.0.1:5500/client/dist/index.html) to view it in the browser.

<hr>
<br>

## Description

1. Basic structure:
   - There should be two views on the site: "Garage" and "Winners".
   - "Garage" view should contain its name, page number, and the full amount of items in the database (how many car user has in his garage).
   - "Winners" view should contain its name, page number, and the full amount of items in the database (how many records the winners table contains).
   - View state should be saved when user switches from one view to another. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.
2. "Garage" view:
   - User should be able to create, update, delete a car, and see the list of the cars. Car has only two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
   - User should be able to select any color from an RGB-Palete and see the picture of the car colored with the color selected and car's name.
   - Near the car's picture should be buttons to update its attributes or delete it.
   - There should be pagination on the "Garage" view (7 cars per one page).
   - There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.
3. Car animation:
   - Near the car's picture should be buttons for starting / stoping the car engine.
   - User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
   - User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
   - Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
4. Race animation:
   - There should be a button to start race. After user clicks this button all the cars on the current page start driving.
   - There should be a button to reset race. After user clicks this button all the cars return to it's initial places.
   - After some car finishes first user should see the message contains car's name that shows which one has won.
5. "Winners" view:
   - After some car wins it should be displayed at the "Winners view" table.
   - There should be pagination (10 winners per one page).
   - Table should include the next culumns: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds" (names of the columns can differ). If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
   - User should be able to sort cars by wins number and by best time (ASC, DESC).
