# retry
Abstruct retry strategy of Promise on failure.

## Installtion
```shell
# install using npm or yarn and github repository link
npm install https://github.com/saikatdutta1991/retry.git --save
# or 
yarn add https://github.com/saikatdutta1991/retry.git
```

## Uses and example
```javascript
// import the library
const { retry } = require("@saikat/retry");

// Here is your async function that returns promise
const func = async number => {
  if (number % 2 === 0) return "Your number is even";
  else throw new Error("Your number is odd");
};

/** Here is the retry function call and options
	retry( promise, times to retry, delay retry on each failure ) 
	retry() its self returns  promise
**/

retry(func(5), 3, 1000).then(v => console.log(v)).catch(err=>console.log(err.message)); // "Your number is odd" after 3 sec

```
