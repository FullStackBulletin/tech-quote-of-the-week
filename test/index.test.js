import test from 'ava';
import { join } from 'path';
import { techQuoteOfTheWeek } from '../src';

test('it should return a quote for a given index', (t) => {
  const fixturesDataPath = join(__dirname, 'fixtures', 'quotes.json');
  const quote = techQuoteOfTheWeek(fixturesDataPath)(1);
  t.is(quote.id, '1');
});

test('it should use the modulo of the index if the given index exceedes the available quotes', (t) => {
  const fixturesDataPath = join(__dirname, 'fixtures', 'quotes.json');
  const quote = techQuoteOfTheWeek(fixturesDataPath)(4);
  t.is(quote.id, '1');
});

test('it should return a default quote', (t) => {
  const quote = techQuoteOfTheWeek()();
  t.truthy(quote);
});
