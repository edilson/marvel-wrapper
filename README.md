# Marvel Wrapper

This is a wrapper for the [Marvel API](https://developer.marvel.com/docs) that runs on Node.JS.

## Available Features

- Characters
  - Comics
  - Series
  - Stories
  - Events

## Installation

```
npm i marvel-wrapper
```

## Usage

First of all it's necessary to instantiate the wrapper.

```js
marvelClient = Marvel({ 
  apiKey: <API_KEY>,
  privateKey: <PRIVATE_KEY> 
})
```

## Calling resources

Basically to call any resource of the API it can be done by doing this:

```js
const Marvel = require('marvel-wrapper')

Marvel.<api endpoint>.<api endpoint option>(args)
```