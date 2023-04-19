import { carHandler } from './components/garage-page/car-buttons/controller/carHandler';
import { editCar } from './components/garage-page/car-buttons/car-actions/editCar';
import { addCar } from './components/garage-page/car-buttons/car-actions/addCar';
import { generateCars } from './components/garage-page/car-buttons/generate-cars/generateCars';
import { winnersMarkup } from './components/winners-page/winners-view/winnersMarkup';
import { garagePageRender } from './components/garage-page/garage-render/garage-load/garagePageRender';
import { garagePageMarkup } from './components/garage-page/garage-render/garage-load/garagePageMarkup';
import { race } from './components/garage-page/race/race';
import { resetRace } from './components/garage-page/race/resetRace';
import { checkWinner } from './components/winners-page/winners-actions/checkWinner';
import { tableHandler } from './components/winners-page/winners-table/tableHandler';

// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = 'https://async-race-backend-d5kb.onrender.com/';
export const FINISH = window.innerWidth - 300;
export const body = document.querySelector('body');

garagePageRender();

export const nameField = document.querySelector('#name');
export const colorField = document.querySelector('#color');
export const editNameField = document.getElementById('edit-name');
export const editColorField = document.getElementById('edit-color');
export const editCarBtn = document.getElementById('edit-car-btn');
export const addCarBtn = document.getElementById('add-car-btn');
export const carList = document.getElementById('get_cars_result');
const generateCarBtn = document.getElementById('generate-car-btn');
const winnersBtn = document.getElementById('winners-btn');
const winnersBtnFromWinners = document.getElementById('winners-btn-from-winners');
const garageBtn = document.getElementById('garage-btn');
const garageBtnFromWinners = document.getElementById('garage-btn-from-winners');
export const winnersPage = document.getElementById('winners-page');
export const garagePage = document.getElementById('garage-page');
export const raceBtn = document.getElementById('race-btn');
export const resetBtn = document.getElementById('reset-btn');
export const winnerField = document.getElementById('winner');
export const winnerParent = document.querySelector('.cars');
export const winnersTable = document.querySelector('tbody');
export const table = document.querySelector('table');

addCarBtn.addEventListener('click', addCar);
editCarBtn.addEventListener('click', editCar);
carList.addEventListener('click', carHandler);
generateCarBtn.addEventListener('click', generateCars);
winnersBtn.addEventListener('click', winnersMarkup);
winnersBtnFromWinners.addEventListener('click', winnersMarkup);
garageBtn.addEventListener('click', garagePageMarkup);
garageBtnFromWinners.addEventListener('click', garagePageMarkup);
raceBtn.addEventListener('click', race);
resetBtn.addEventListener('click', resetRace);
table.addEventListener('click', tableHandler);

export const interval = setInterval(checkWinner, 2000);
