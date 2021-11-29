const request = require('./request')

const creators = ({ apiKey, privateKey }) => {
  const method = 'GET'

  const basePath = 'creators'

  return {
    async getCreators({ limit, offset }) {
      const response = await request({ path: basePath, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCreatorById({ creatorId }) {
      const response = await request({ path: `${basePath}/${creatorId}`, method, apiKey, privateKey })

      return response
    },
    async getCreatorComics({ creatorId, limit, offset }) {
      const response = await request({ path: `${basePath}/${creatorId}/comics`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCreatorEvents({ creatorId, limit, offset }) {
      const response = await request({ path: `${basePath}/${creatorId}/events`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCreatorSeries({ creatorId, limit, offset }) {
      const response = await request({ path: `${basePath}/${creatorId}/series`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCreatorStories({ creatorId, limit, offset }) {
      const response = await request({ path: `${basePath}/${creatorId}/stories`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    }
  }
}

module.exports = creators