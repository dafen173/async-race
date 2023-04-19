import { BASE_URL } from '../../../../frontend';
import { deleteWinner } from '../../../winners-page/winners-actions/deleteWinner';
import { getAllCars } from '../../garage-render/garage-load/getAllCars';

export async function deleteCar(id) {
  try {
    console.log(id);
    const res = await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data) {
      document.getElementById(`car${id}`).remove();
    }
  } catch (error) {
    console.error(error);
  }

  deleteWinner(id);
  getAllCars();
}

export default deleteCar;
