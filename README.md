# Timestamp-Microservice API 
## What is this? 
This is a microservice API project that is part of [freeCodeCamp](https://www.freecodecamp.org) challenges. The api accepts a date via GET request either in human readable format or in unix format and will return a JSON object of the same date with both formats.

### Usage 
Launch server using ```npm run start``` or ```node server.js``` and run the following urls with your desired dates.

```
http://localhost:3000/December%2012,%202015
```
```
http://localhost:3000/1449871200
```

Or see it live [here](https://oceanic-bamboo.glitch.me/)

### Output
```
{
  natural: December 12, 2015,
  unix: 1449871200
}
```
