# Monet

Monet is a small library that help you manipulate monetary values.

[Documentation](https://sachacr.github.io/monet)

## Examples:

### Create Money object:

```typescript
import { money } from 'monet';

const euros = money({
  amount: 1301,
  precision: 2,
  currency: "EUR",
});

euros.getAmount() // 1301
euros.getValue() // 13.01
euros.getPrecision() // 2
euros.getCurrency()) // "EUR"
euros.toString() // "13.01 EUR"
```

### Money object API:

```typescript
eurosAmount1.add(eurosAmount2); // returns a new Money object

eurosAmount1.remove(eurosAmount2); // returns a new Money object

eurosAmount1.changeWith(exchangeRate); // returns a new Money object

eurosAmount1.setPrecision(precision); // returns a new Money object
```

### ExchangeRate object:

```typescript
import { exchangeRate } from "monet";

const rate = exchangeRate({
  fromCurrency: "EUR",
  toCurrency: "USD",
  rate: 1.123,
});

rate.getFromCurrency(); // "EUR"
rate.getToCurrency(); // "USD"
rate.getRate(); // 1.123
```

## Install the project:

`$ npm i`

## Run the tests:

`$ npm test`

## Generate Documentation:

`$ npm run doc`
