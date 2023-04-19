import { garageMarkup } from '../garage-view/garageMarkup';
import { getAllCars } from './getAllCars';

export const garagePageRender = () => {
  garageMarkup();
  window.addEventListener('DOMContentLoaded', getAllCars);
};

export default garagePageRender;
