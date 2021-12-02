const request = require('./request')
const mountRequestParams = require('../utils/mountRequestParams')

const series = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'series'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(seriesId) {
      const response = await request({ path: `${basePath}/${seriesId}`, method, apiKey, privateKey })

      return response
    },
    async getCharacters(seriesId, params) {
      const response = await request({ path: `${basePath}/${seriesId}/characters`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getComics(seriesId, params) {
      const response = await request({ path: `${basePath}/${seriesId}/comics`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getCreators(seriesId, params) {
      const response = await request({ path: `${basePath}/${seriesId}/creators`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getEvents(seriesId, params) {
      const response = await request({ path: `${basePath}/${seriesId}/events`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getStories(seriesId, params) {
      const response = await request({ path: `${basePath}/${seriesId}/stories`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = series