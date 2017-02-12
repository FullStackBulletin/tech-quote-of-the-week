# tech-quote-of-the-week

A library to get every week a new tech quote that might be enjoyed by the fullstack developer.


## Install

With NPM:

```bash
npm install tech-quote-of-the-week
```

with Yarn:

```bash
yarn add tech-quote-of-the-week
```


## Usage

ES5 example:

```javascript
var techQuoteOfTheWeek = require('tech-quote-of-the-week');
console.log(techQuoteOfTheWeek()()); // changes every week based on current time

// You can pass a custom week number (from 1 to 53) to get a different quote
console.log(techQuoteOfTheWeek()(23));
```

ES2015 example:

```javascript
import { techQuoteOfTheWeek } from 'tech-quote-of-the-week';
console.log(techQuoteOfTheWeek()()); // changes every week based on current time

// You can pass a custom week number (from 1 to 53) to get a different quote
console.log(techQuoteOfTheWeek()(23));
```


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/FullStackBulletin/tech-quote-of-the-week/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
