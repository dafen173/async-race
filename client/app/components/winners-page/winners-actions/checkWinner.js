import { winner } from '../../garage-page/car-buttons/car-actions/startCar';
import { createWinner } from './createWinner';
import { interval, BASE_URL } from '../../../frontend';
import { offResetBtnAndAlert } from '../../garage-page/race/offResetBtnAndAlert';
import { editWinner } from './editWinner';

export async function checkWinner() {
  if (winner[0]) {
    const resWinner = await fetch(`${BASE_URL}/winners`);
    const winnerCarResults = await resWinner.json();

    const search = winnerCarResults.find((x) => x.id === winner[0]);
    if (search === undefined) {
      createWinner(winner[0]);
      clearInterval(interval);
      offResetBtnAndAlert(winner[0]);
    } else {
      editWinner(winner[0]);
      clearInterval(interval);
      offResetBtnAndAlert(winner[0]);
    }
  }
}

export default checkWinner;
