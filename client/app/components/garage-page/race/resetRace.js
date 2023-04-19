import { raceBtn, BASE_URL } from '../../../frontend';
import { carsPerPageArr } from '../garage-render/garage-view/paginationGarage';
import { stopCar } from '../car-buttons/car-actions/stopCar';
import { winner } from '../car-buttons/car-actions/startCar';
import { createWinner } from '../../winners-page/winners-actions/createWinner';
import { offResetBtnAndAlert } from './offResetBtnAndAlert';
import { editWinner } from '../../winners-page/winners-actions/editWinner';
import { START_CAR_POSITION } from '../../constants/constants';

export const resetRace = () => {
  raceBtn.removeAttribute('disabled');
  winner.length = 0;

  const allButtons = document.querySelectorAll('button');
  allButtons.forEach((x) => {
    x.removeAttribute('disabled');
  });

  const intervalAfterReset = setInterval(checkWinnerAfterReset, 2000);
  async function checkWinnerAfterReset() {
    if (winner[0]) {
      const resWinner = await fetch(`${BASE_URL}/winners`);
      const winnerCarResults = await resWinner.json();

      const search = winnerCarResults.find((x) => x.id === winner[0]);

      if (search === undefined) {
        createWinner(winner[0]);
        clearInterval(intervalAfterReset);
        offResetBtnAndAlert(winner[0]);
      } else {
        editWinner(winner[0]);
        clearInterval(intervalAfterReset);
        offResetBtnAndAlert(winner[0]);
      }
    }
  }

  carsPerPageArr.forEach((el) => {
    stopCar(el.id);
    const carImagePerPage = document.getElementById(`car-icon-${el.id}`);
    carImagePerPage.style.left = `${START_CAR_POSITION}px`;
  });
};

export default resetRace;
