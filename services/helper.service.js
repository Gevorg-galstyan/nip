// Wed Oct 21 2020 08:45:00 GMT+0300 -> '21.10.2020'
export const dateFormat = (date, timeZone = 'Europe/Moscow') => {
  if (!date || !(date instanceof Date)) {
    return '';
  }

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  if (timeZone) {
    options.timeZone = timeZone;
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(date);
};

// Wed Oct 21 2020 08:45:00 GMT+0300 -> 21 октября 2020 г.
export const dateToDateLong = (date, timeZone = null) => {
  if (!date || !(date instanceof Date)) {
    return '';
  }

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  if (timeZone) {
    options.timeZone = timeZone;
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(date);
};

// Wed Oct 21 2020 08:45:00 GMT+0300 -> 08:45
export const dateToHoursMinutes = (date, timeZone = 'Europe/Moscow') => {
  if (!date || !(date instanceof Date)) {
    return '00:00';
  }

  const options = {
    hour12: false,
    minute: '2-digit',
    hour: '2-digit',
  };

  if (timeZone) {
    options.timeZone = timeZone;
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(date);
};

// 1840 -> 1 840 ₽
export const currencyMask = (value, currency = null) => {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  };

  if (currency) {
    options.style = 'currency';
    options.currency = currency;
  }

  return new Intl.NumberFormat('ru-RU', options).format(value || 0);
};
