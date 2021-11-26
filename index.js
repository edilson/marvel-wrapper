const characters = require('./lib/characters')

const Marvel = ({ apiKey, privateKey }) => {
  if (!apiKey || !privateKey) {
    throw new Error('You must provide both apiKey and privateKey!')
  }

  return {
    characters: characters({ apiKey, privateKey })
  }
}

module.exports = Marvel