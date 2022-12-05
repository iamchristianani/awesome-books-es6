import { dateEl } from './variableList.js';
import { DateTime } from './luxon.js';

export default () => {
  const now = DateTime.now();
  dateEl.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
