import { BASE_URL } from '../../../../frontend';
import { displayList, displayPagination } from '../garage-view/paginationGarage';

export const CURRENT_PAGE = 1;
const ROWS = 7;

export async function getAllCars() {
  const res = await fetch(`${BASE_URL}/garage`);
  const cars = await res.json();

  const carsAmount = document.getElementById('cars-amount');
  carsAmount.innerHTML = `<h3>Total amount of cars: ${cars.length}</h3>`;

  displayList(cars, ROWS, CURRENT_PAGE);
  displayPagination(cars, ROWS);
}
