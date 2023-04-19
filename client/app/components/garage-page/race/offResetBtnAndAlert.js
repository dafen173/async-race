import { BASE_URL, resetBtn } from '../../../frontend';
import { carsTime } from '../car-buttons/car-actions/startCar';

export const offResetBtnAndAlert = async (winnerId) => {
  const raceWinner = document.getElementById('race-winner');

  resetBtn.removeAttribute('disabled');

  const deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach((x) => x.removeAttribute('disabled'));

  const res = await fetch(`${BASE_URL}/garage/${winnerId}`);
  const winnerCar = await res.json();

  raceWinner.innerHTML = `<h3>The winner is the ${winnerCar.name} with time ${carsTime[0]}!</h3>`;
};

export default offResetBtnAndAlert;
