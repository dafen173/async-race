import { carsPerPageArr } from '../garage-render/garage-view/paginationGarage';
import { startCar, winner, carsTime } from '../car-buttons/car-actions/startCar';
import { raceBtn, resetBtn } from '../../../frontend';

export const race = () => {
  winner.length = 0;
  carsTime.length = 0;

  const deleteButtons = document.querySelectorAll('.btn-delete');

  deleteButtons.forEach((x) => x.setAttribute('disabled', ''));

  raceBtn.setAttribute('disabled', '');
  resetBtn.setAttribute('disabled', '');
  carsPerPageArr.forEach((el) => {
    startCar(el.id);
  });
};

export default race;
