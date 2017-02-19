import test from 'ava';
import { techQuoteOfTheWeek } from '../src';
import fixtureData from './fixtures/quotes.json';

test('it should return a quote for a given index', (t) => {
  const quote = techQuoteOfTheWeek(fixtureData)(1);
  t.is(quote.id, '1');
});

test('it should use the modulo of the index if the given index exceedes the available quotes', (t) => {
  const quote = techQuoteOfTheWeek(fixtureData)(4);
  t.is(quote.id, '1');
});

test('it should return a default quote', (t) => {
  const quote = techQuoteOfTheWeek()();
  t.truthy(quote);
});
