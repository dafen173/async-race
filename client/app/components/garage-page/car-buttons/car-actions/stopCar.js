import { BASE_URL } from '../../../../frontend';
import { resetRace } from '../../race/resetRace';
import { stopCarPlace } from './startCar';

export async function stopCar(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const resStop = await res.json();

  const carImage = document.getElementById(`car-icon-${id}`);

  if (resStop.velocity === 0) {
    carImage.classList.remove('move');
    carImage.classList.add('stop');
  }

  if (parseInt(carImage.style.left, 10) >= stopCarPlace) {
    resetRace();
  }
}

export default stopCar;
