import moment from 'moment';

export const techQuoteOfTheWeek = (quotes) => {
  /* eslint global-require: 0*/
  const data = quotes || require('../data/quotes.json');
  return (weekNumber) => {
    const index = weekNumber || moment().format('W');
    return data[(index - 1) % data.length];
  };
};

export default techQuoteOfTheWeek;
