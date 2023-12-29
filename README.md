# convertToBoolean

It converts any value into a boolean value. The package includes `es` and universal module defination(umd), that can be used in browser.

## Install

```
npm i convert-to-boolean
```

## Tested values

```
convertToBoolean([]); // false
convertToBoolean({}); // false
convertToBoolean(''); // false
convertToBoolean(null); // false
convertToBoolean(undefined); // false
convertToBoolean('0'); // false
convertToBoolean('1'); // true
convertToBoolean(['a', 'b']); // true
convertToBoolean('string'); // true
convertToBoolean(2 / 0); // false
convertToBoolean(0); // false
convertToBoolean(1); // true
convertToBoolean(0.0); // false
convertToBoolean(0.1); // true
```


## License

MIT © [Shashikant Yadav](https://github.com/kantbtrue)