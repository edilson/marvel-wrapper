const request = require('./request');
const mountRequestParams = require('../utils/mountRequestParams')

const comics = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'comics'

  return {
    async get(params) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getById(comicId) {
      const response = await request({ path: `comics/${comicId}`, method, apiKey, privateKey })

      return response
    },
    async getCharacters(comicId, params) {
      const response = await request({ path: `comics/${comicId}/characters`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getCreators(comicId, params) {
      const response = await request({ path: `comics/${comicId}/creators`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getEvents(comicId, params) {
      const response = await request({ path: `comics/${comicId}/events`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    },
    async getStories(comicId, params) {
      const response = await request({ path: `comics/${comicId}/stories`, method, apiKey, privateKey, params: mountRequestParams(params) })

      return response
    }
  }
}

module.exports = comics