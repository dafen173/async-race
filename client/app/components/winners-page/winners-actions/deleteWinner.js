import { BASE_URL } from '../../../frontend';

export async function deleteWinner(id) {
  try {
    console.log('delete winner', id);
    const res = await fetch(`${BASE_URL}/winners/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default deleteWinner;
