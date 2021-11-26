const request = require('./request');

const characters = ({ apiKey, privateKey }) => {
  const method = 'GET'

  return {
    async getCharacters({ limit, offset }) {
      const response = await request({ path: 'characters', method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCharacterById({ characterId }) {
      const response = await request({ path: `characters/${characterId}`, method, apiKey, privateKey })

      return response
    },
    async getComicsOfACharacter({ characterId, limit, offset }) {
      const response = await request({ path: `characters/${characterId}/comics`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventsOfACharacter({ characterId, limit, offset }) {
      const response = await request({ path: `characters/${characterId}/events`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getSeriesOfACharacter({ characterId, limit, offset }) {
      const response = await request({ path: `characters/${characterId}/series`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getStoriesOfACharacter({ characterId, limit, offset }) {
      const response = await request({ path: `characters/${characterId}/stories`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    }
  }
}

module.exports = characters