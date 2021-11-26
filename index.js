const characters = require('./lib/characters')
const comics = require('./lib/comics')

const Marvel = ({ apiKey, privateKey }) => {
  if (!apiKey || !privateKey) {
    throw new Error('You must provide both apiKey and privateKey!')
  }

  return {
    characters: characters({ apiKey, privateKey }),
    comics: comics({ apiKey, privateKey })
  }
}

module.exports = Marvel