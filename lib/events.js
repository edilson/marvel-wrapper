const request = require('./request')

const events = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'events'

  return {
    async getEvents({ limit, offset }) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventById({ eventId }) {
      const response = await request({ path: `${basePath}/${eventId}`, method, apiKey, privateKey })

      return response
    },
    async getEventCharacters({ eventId, limit, offset }) {
      const response = await request({ path: `${basePath}/${eventId}/characters`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventComics({ eventId, limit, offset }) {
      const response = await request({ path: `${basePath}/${eventId}/comics`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventCreators({ eventId, limit, offset }) {
      const response = await request({ path: `${basePath}/${eventId}/creators`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventSeries({ eventId, limit, offset }) {
      const response = await request({ path: `${basePath}/${eventId}/series`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventStories({ eventId, limit, offset }) {
      const response = await request({ path: `${basePath}/${eventId}/stories`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
  }
}

module.exports = events