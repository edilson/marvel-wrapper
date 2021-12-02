const request = require('./request');
const mountRequestParams = require('../utils/mountRequestParams')

const characters = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'characters'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(characterId) {
      const response = await request({ path: `${basePath}/${characterId}`, method, apiKey, privateKey })

      return response
    },
    async getComics(characterId, params) {
      const response = await request({ path: `${basePath}/${characterId}/comics`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getEvents(characterId, params) {
      const response = await request({ path: `${basePath}/${characterId}/events`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getSeries(characterId, params) {
      const response = await request({ path: `${basePath}/${characterId}/series`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getStories(characterId, params) {
      const response = await request({ path: `${basePath}/${characterId}/stories`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = characters