import { dateEl } from "./variableList.js";
import { DateTime } from "./luxon.js";

const showDate = () => {
  const now = DateTime.now();
  dateEl.innerHTML =  now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}

export {showDate};