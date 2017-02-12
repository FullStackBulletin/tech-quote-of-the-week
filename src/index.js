import { join } from 'path';
import { readFileSync } from 'fs';
import moment from 'moment';

export const techQuoteOfTheWeek = (dataSource) => {
  const source = dataSource || join(__dirname, '..', 'data', 'quotes.json');
  const data = JSON.parse(readFileSync(source, 'utf8'));
  return (weekNumber) => {
    const index = weekNumber || moment().format('W');
    return data[(index - 1) % data.length];
  };
};

export default techQuoteOfTheWeek;
