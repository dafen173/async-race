import { winnersTable, BASE_URL } from '../../../frontend';
import { insertCarImage } from '../winners-table/insertCarImage';

export const currentPageWinners = 1;
export const rowsWinners = 10;

export function displayListWinners(arrData, rowPerPage, page) {
  winnersTable.innerHTML = '';

  const pageMinusOne = page - 1;

  const start = rowPerPage * pageMinusOne;
  const end = start + rowPerPage;
  const paginatedData = arrData.slice(start, end);

  paginatedData.forEach(async (element) => {
    const res = await fetch(`${BASE_URL}/garage/${element.id}`);
    const winners = await res.json();

    const row = winnersTable.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = element.id;
    cell2.innerHTML = insertCarImage(winners.color);
    cell3.innerHTML = winners.name;
    cell4.innerHTML = element.wins;
    cell5.innerHTML = element.time;
  });
}

function displayWinnersPaginationBtn(page, rowPerPage) {
  const liEl = document.createElement('li');
  liEl.classList.add('pagination__item');
  liEl.innerText = page;

  if (currentPageWinners === page) liEl.classList.add('pagination-winners__item--active');

  liEl.addEventListener('click', async () => {
    const res = await fetch(`${BASE_URL}/winners`);
    const carsPerPage = await res.json();

    displayListWinners(carsPerPage, rowPerPage, page);

    const currentItemLi = document.querySelector('li.pagination-winners__item--active');

    currentItemLi.classList.remove('pagination-winners__item--active');
    liEl.classList.add('pagination-winners__item--active');
  });
  return liEl;
}

export function displayWinnersPagination(arrData, rowPerPage) {
  const paginationWinnersEl = document.querySelector('.winners-pagination');

  paginationWinnersEl.innerHTML = '';
  const pagesCount = Math.ceil(arrData.length / rowPerPage);
  const ulEl = document.createElement('ul');
  ulEl.classList.add('pagination__list');

  for (let i = 0; i < pagesCount; i++) {
    const liEl = displayWinnersPaginationBtn(i + 1, rowPerPage);
    ulEl.appendChild(liEl);
  }
  paginationWinnersEl.appendChild(ulEl);
}
