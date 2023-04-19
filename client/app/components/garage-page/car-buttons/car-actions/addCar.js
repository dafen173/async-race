import { BASE_URL, nameField, colorField } from '../../../../frontend';
import { getAllCars } from '../../garage-render/garage-load/getAllCars';

export async function addCar() {
  const car = {
    name: nameField.value,
    color: colorField.value,
  };

  if (nameField) {
    await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    getAllCars();

    nameField.value = '';
    colorField.value = '#000000';
  }
}

export default addCar;
