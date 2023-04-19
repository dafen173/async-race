import { BEST_TIME_COLUMN, WINS_NUMBER_COLUMN } from '../../constants/constants';
import { sortTable } from './sortTable';

export const tableHandler = (el) => {
  const targetEl = el.target;
  const thIndex = el.target.cellIndex;
  if (thIndex === WINS_NUMBER_COLUMN || thIndex === BEST_TIME_COLUMN) {
    el.target.classList.toggle('ascending');
    sortTable(targetEl);
  }
};

export default tableHandler;
