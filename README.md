# AlgoMalgo

AlgoMalgo is a simple web service that implements a few algorithms and returns the comptuted results based provided parameters. An algorithm is a process or set of steps to accomplish a certain task.

The service hosts the following endpoints:

**`GET: /info`**

This will return a list of the available solutions that the service can respond to. An example response is

```json
[
    {
        "title": "FizzBuzz",
        "solution": "fizzbuzz"
    },
    ...
]
```

* `title` is the name of the algorithm

* `solution` is a parameter value that needed for further details on how to use the solution. In this case the `FizzBuzz` solution.

## EndPoints

There are two main endpoints on this service.

* `/info`

* `/solution`

**`GET: /info`**

Is the same as `GET /` and will return a list of available algorithmic solutions and their request params in the `solution` property.

**`GET: /info/:solution`**

`:solution` here is a param value that must match one of the items in the `solution` property from the above returned list
e.g. to get more info about the FizzBuzz algorithm hit `http://<host>:<port>/info/fizzbuzz`. This will provide more details and what parameters or properties the endpoint is expecting, each endpoint accomplishes one task.

**`POST: /solution/:solution`**

A request to this endpoint would provide a response based on the input provided. This would expect a payload with certain properties available, this information is available by a call to the corresponding endpoint on the `/info` route as described above.

Any other route would return a `404` status and if a request is made without the expected property or properties a `400` Bad Request is returned with some information.

Any other errors will return a `500` Internal Server Error.

## Setup

To get started, after downloading or checking out the project, run

```bash
npm install
```

from the project root directory, then run:

```bash
npm start
```

This will start an [Express](https://expressjs.com/) web service on the default port `3000`, you can start it on another port by running:

```bash
PORT=<your port number> npm start
```

## Tests

To run the test suites run

```bash
npm test
```

This will kick of the [Jest](https://jestjs.io/) test runner and you should see some info in your terminal

## The Algorithms

### `FizzBuzz`

The Fizz Buzz algorithm will take in a number, and return an array of numbers from 0 to the number.

In that array, all numbers that are divisible by 3 will be replace with the word 'Fizz' and those divisible by 5 'Buzz'.

Those divisible by 3 and 5 with be replace with the word 'FizzBuzz'.

The Fizz Buzz algorithm is expecting a payload with a `num` property.

`POST: /solution/fizzbuzz`

```json
{ "num": 20 }
```

It would respond with an array of values.

### `Caeser Cipher`

The Ceaser Cipher algorithm takes in a string and a number and would shift every letter in the string by the mumber.

The Ceaser Cipher algorithm is expecting a payload with a `text` and a `num` property.

`POST: /solution/ceaser-cipher`

```json
{
    "text": "The string to shift",
    "num": 2
}
```

It would respond with a string with each letter shifted 'num' places in the alphabet.

### `Harmless Ransom Note`

The Harmless Ransom Note algorithm with take in a note and a text and determine if we have enough words in the magazine text to create our note.

The Harmless Ransom Note algorithm is expecting a payload with a `note` and `magazine` property

`POST: /solution/harmless-ransom-note`

```json
{
    "note": "the note",
    "magazine": "i'd like write a to note while the sun is up"
}
```

It would respond with true if we can create our Harmless Ransom note or false other wise.

### `Palindrome`

The Palindrome algorithm will take a string as a parameter and return true if the string is a Palindrome. A Palindrome is a word that is the same forward or backwords. e.g. 'race car'.

The Palindrome algorithm is expecting a payload with a `word` property

`POST: /solution/palindrome`

```json
{ "word": "race car" }
```

It would return true if it's a Palindrome or false otherwise.

### `Reverse Words`

The Reversed  Words algorithm will take in a string as a parameter and reverse every word in a given string.

The Reverse Words algorithm is expecting a payload with a `word` property

`POST: /solution/reverse-words`

```json
{ "word": "words to reverse" }
```

It would respond with all the words reversed

### `Binary Search`

The Binary Search algorithm will perform a binary for a given value inside of a list.

The Binary Search algorithm is expecting a payload with a `numArray` and `key` property

`POST: /solution/reverse-words`

```json
{ "numArray": [3,4,7,3,2], "key": 2 }
```

It would return true if the key exists in the list or false otherwise.

### `Bubble Sort`

The Bubble Sort algorithm will perform a bubble sort on an array of numbers from least to greatest.

The Bubble Sort algorithm is expecting a payload with a `numArray` property.

`POST: /solution/bubble-sort`

```json
{ "numArray": [2,6,8,3] }
```

It would return a sorted array of numbers

### `Factorial`

The Factorial algorithm would calculate the the product of all positive integers less than or equal to a given positive integer.

The Factorial algorithm is expecting a payload with a `num` property

`POST: /solution/factorial`

```json
{ "num": 5 }
```

It would return the calculated factorial value

### `Merge Sort`

The Merge Sort algorithm would perform a mergesort routine on a given list of numbers sorting them least to greatest.

The Merge Sort algorithm is expecting a payload with `numArray` propery

It would return an array in sorted order.

### `Mean Median Mode`

The Mean Median Mode algorithm calculates the mean. median and mode for a list of numbers provided.

The Mean Median Mode algorithm is expecting a payload with a `numArray` property

`POST: /solution/factorial`

```json
{ "numArray": [2,5,9,23 ] }
```

It would return an object with a mean,median and mode properties and values calculated from he `numArray` provided

### `Max Stock Profit`

The Max Stock Profit algorithm takes in an array of prices as a parameter, this represents the price
if a single stock for the day and would return the maximum possible profit that can be made based on the values provided.

The Max Stock Profit algorithm is expecting a list of price values

`POST: /solution/max-stock-profit`

```json
{ "priceArray": [23,4,67,34] }
```

It would return the maximum possible profit that can be made

### `Reverse Array`

The Reverse Array algorithm will reverse in place the array provided as the parameter.

The Reverse Array algorithm is expecting a payload with a `numArray` property

`POST: /solution/reverse-array`

```json
{ "numArray": [1,4,7] }
```

It would return the array in reverse

### `Two Sum`

The Two Sum algorithm would return every pair of numbers from the provided numbers array that add up to the provied sum.

The Two Sum algorithm is expecting a payload with a `numArray` and `sum` properties

`POST: /solution/two-sum`

```json
{ "numArray": [2,5,4,3], "sum": 7 }
```

It would return an array containing arrays of the pair of numbers from `numArray` that add up to the `sum` number

### `Sieve Of Eratosthenes`

The Sieve of Eratosthenes algorithm would return all of the prime numbers up to a given number provided.

The Sieve of Eratosthenes algorithm is expecting a payload with a `num` property

`POST: /solution/sieve-of-eratosthenes`

```json
{ "num": 100 }
```

It would return a list of all prime numbers up to `num`

### `Fibonacci Memoized`

The Fibonacci algorithm would return the fibonacci number at a given position provied as a parameter.

The Fibonacci algorithm is expecting a payload with a `position` property

`POST: /solution/fibonacci-memoized`

```json
{ "position": 10 }
```

It would return the fibonacci number at that position

### `Anagrams`

The Anagram algorithm determines if two words or phrase consits of, are formed with, the same sets characters if re-arranged. e.g `cinema` and `iceman`.

The Anagram algorithm is expecting a payload with two properties `phrase1` and `phrase2`

`POST: /solution/anagrams`

```json
{ "phrase1": "cinema", "phrase2": "iceman" }
```

It would return true if both words are anagrams or false otherwise
