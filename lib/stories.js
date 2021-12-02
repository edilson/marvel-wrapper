const request = require('./request')
const mountRequestParams = require('../utils/mountRequestParams')

const stories = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'stories'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(storyId) {
      const response = await request({ path: `${basePath}/${storyId}`, method, apiKey, privateKey })

      return response
    },
    async getCharacters(storyId, params) {
      const response = await request({ path: `${basePath}/${storyId}/characters`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getComics(storyId, params) {
      const response = await request({ path: `${basePath}/${storyId}/comics`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getCreators(storyId, params) {
      const response = await request({ path: `${basePath}/${storyId}/creators`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getEvents(storyId, params) {
      const response = await request({ path: `${basePath}/${storyId}/events`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getSeries(storyId, params) {
      const response = await request({ path: `${basePath}/${storyId}/series`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = stories