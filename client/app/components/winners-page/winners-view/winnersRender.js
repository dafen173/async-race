import { BASE_URL } from '../../../frontend';
import {
  currentPageWinners, displayListWinners, displayWinnersPagination, rowsWinners,
} from './paginationWinners';

export async function winnersRender() {
  const resWinner = await fetch(`${BASE_URL}/winners`);
  const winnerCarResults = await resWinner.json();

  const winnersAmount = document.getElementById('winners-amount');
  winnersAmount.innerHTML = `<h3>Total amount of winners: ${winnerCarResults.length}</h3>`;

  displayListWinners(winnerCarResults, rowsWinners, currentPageWinners);
  displayWinnersPagination(winnerCarResults, rowsWinners);
}

export default winnersRender;
