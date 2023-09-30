const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const getDate = () => {
  const date = new Date();

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const timezone = date.toString().match(/\(([^)]+)\)$/)[1];

  const formattedDate = `${dayOfWeek} ${month} ${day} ${year} ${hours}:${minutes}:${seconds} GMT${
    date.getTimezoneOffset() > 0 ? '-' : '+'
  }${Math.abs(date.getTimezoneOffset() / 60)
    .toString()
    .padStart(2, '0')}${Math.abs(date.getTimezoneOffset() % 60)
    .toString()
    .padStart(2, '0')} (${timezone})`;

  return formattedDate;
};

module.exports = {
  add,
  subtract,
  getDate,
};
