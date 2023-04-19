import { BASE_URL } from '../../../../frontend';
import {
  CAR_INTEND, COEF_TO_SECONDS, PERCENT_COEF, SPEED_INCREASE_COEF, START_CAR_POSITION,
} from '../../../constants/constants';

export const winner = [];
export const carsTime = [];

export let stopCarPlace;

export async function startCar(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const resStart = await res.json();

  const carImage = document.getElementById(`car-icon-${id}`);
  carImage.classList.remove('stop');
  carImage.classList.add('move');

  const startTime = new Date().getTime();

  const track = document.querySelector('.track');
  stopCarPlace = track.offsetWidth - ((CAR_INTEND * track.offsetWidth) / PERCENT_COEF);

  const makeMove = () => {
    const currTime = new Date().getTime();
    const newPos = (START_CAR_POSITION + ((currTime - startTime) / COEF_TO_SECONDS)
                    * SPEED_INCREASE_COEF * resStart.velocity);
    carImage.style.left = `${newPos}px`;

    if (newPos <= stopCarPlace && carImage.classList.contains('move')) {
      window.requestAnimationFrame(makeMove);
    }

    if (carImage.classList.contains('stop')) {
      carImage.style.left = `${START_CAR_POSITION}px`;
    }

    if (newPos >= stopCarPlace - 1) {
      winner.push(id);

      const finishTime = new Date().getTime();
      const winnerTime = (finishTime - startTime) / COEF_TO_SECONDS;
      carsTime.push(winnerTime);
    }
  };
  makeMove();

  try {
    const resDrive = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    const resDriveJson = await resDrive.json();
    console.log(resDriveJson);
  } catch (error) {
    console.log('ENGINE IS BROKEN!');
    console.log(error);
    carImage.classList.remove('move');
  }
}
