const characters = require('./lib/characters')
const comics = require('./lib/comics')
const creators = require('./lib/creators')
const events = require('./lib/events')
const series = require('./lib/series')
const stories = require('./lib/stories')

const Marvel = ({ apiKey, privateKey }) => {
  if (!apiKey || !privateKey) {
    throw new Error('You must provide both apiKey and privateKey!')
  }

  return {
    characters: characters({ apiKey, privateKey }),
    comics: comics({ apiKey, privateKey }),
    creators: creators({ apiKey, privateKey }),
    events: events({ apiKey, privateKey }),
    series: series({ apiKey, privateKey }),
    stories: stories({ apiKey, privateKey })
  }
}

module.exports = Marvel