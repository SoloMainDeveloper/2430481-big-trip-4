import dayjs from 'dayjs';

function getTripStartDate(sortedPoints) {
  return dayjs(sortedPoints[0].dateFrom).format('MMM DD');
}

function getTripEndDate(sortedPoints) {
  const startDate = sortedPoints[0].dateFrom;
  const endDate = sortedPoints[sortedPoints.length - 1].dateTo;
  if (dayjs(startDate).format('MMM') === dayjs(endDate).format('MMM')) {
    return dayjs(endDate).format('DD');
  } else {
    return dayjs(endDate).format('MMM DD');
  }
}

function getTripTitle(cities) {
  if (cities.length > 3) {
    return `${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}`;
  }
  return cities.reduce((acc, city, index) => {
    if (index !== cities.length - 1) {
      acc += `${city} &mdash; `;
    } else {
      acc += `${city}`;
    }
    return acc;
  }, '');
}

export { getTripStartDate, getTripEndDate, getTripTitle };
