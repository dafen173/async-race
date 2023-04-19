import { generatedCarArr } from './generatedCarArr';
import { BASE_URL } from '../../../../frontend';
import { getAllCars } from '../../garage-render/garage-load/getAllCars';

export async function generateCars() {
  await Promise.all(generatedCarArr.map(async (item) => {
    await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
  }));

  getAllCars();
}

export default generateCars;
