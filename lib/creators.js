const request = require('./request')
const mountRequestParams = require('../utils/mountRequestParams')

const creators = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'creators'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(creatorId) {
      const response = await request({ path: `${basePath}/${creatorId}`, method, apiKey, privateKey })

      return response
    },
    async getComics(creatorId, params) {
      const response = await request({ path: `${basePath}/${creatorId}/comics`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getEvents(creatorId, params) {
      const response = await request({ path: `${basePath}/${creatorId}/events`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getSeries(creatorId, params) {
      const response = await request({ path: `${basePath}/${creatorId}/series`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getStories(creatorId, params) {
      const response = await request({ path: `${basePath}/${creatorId}/stories`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = creators