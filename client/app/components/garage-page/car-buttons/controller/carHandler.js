import { deleteCar } from '../car-actions/deleteCar';
import { selectCar } from '../car-actions/selectCar';
import { startCar } from '../car-actions/startCar';
import { stopCar } from '../car-actions/stopCar';
import { ID_NUMBERS_FROM_INDEX } from '../../../constants/constants';

export const carHandler = (el) => {
  if (el.target.classList.contains('btn-delete')) {
    const carId = el.target.parentElement.id.slice(ID_NUMBERS_FROM_INDEX);
    deleteCar(carId);
  }

  if (el.target.classList.contains('btn-edit')) {
    const carId = el.target.parentElement.id.slice(ID_NUMBERS_FROM_INDEX);
    selectCar(carId);
  }

  if (el.target.classList.contains('start-car-btn')) {
    el.target.setAttribute('disabled', '');
    el.target.nextElementSibling.removeAttribute('disabled');
    const carId = el.target.parentElement.parentElement.id.slice(ID_NUMBERS_FROM_INDEX);
    startCar(carId);
  }

  if (el.target.classList.contains('stop-car-btn')) {
    el.target.setAttribute('disabled', '');
    el.target.previousElementSibling.removeAttribute('disabled');
    const carId = el.target.parentElement.parentElement.id.slice(ID_NUMBERS_FROM_INDEX);
    stopCar(carId);
  }
};

export default carHandler;
