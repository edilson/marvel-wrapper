const request = require('./request')
const mountRequestParams = require('../utils/mountRequestParams')

const events = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'events'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(eventId) {
      const response = await request({ path: `${basePath}/${eventId}`, method, apiKey, privateKey })

      return response
    },
    async getCharacters(eventId, params) {
      const response = await request({ path: `${basePath}/${eventId}/characters`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getComics(eventId, params) {
      const response = await request({ path: `${basePath}/${eventId}/comics`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getCreators(eventId, params) {
      const response = await request({ path: `${basePath}/${eventId}/creators`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getSeries(eventId, params) {
      const response = await request({ path: `${basePath}/${eventId}/series`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getStories(eventId, params) {
      const response = await request({ path: `${basePath}/${eventId}/stories`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = events