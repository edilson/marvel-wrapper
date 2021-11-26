const request = require('./request');

const comics = ({ apiKey, privateKey }) => {
  const method = 'GET'

  return {
    async getComics({ limit, offset }) {
      const response = await request({ path: 'comics', method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getComicById({ comicId }) {
      const response = await request({ path: `comics/${comicId}`, method, apiKey, privateKey })

      return response
    },
    async getCharactersOfAComic({ comicId, limit, offset }) {
      const response = await request({ path: `comics/${comicId}/characters`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getCreatorsOfAComic({ comicId, limit, offset }) {
      const response = await request({ path: `comics/${comicId}/creators`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getEventsOfAComic({ comicId, limit, offset }) {
      const response = await request({ path: `comics/${comicId}/events`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    },
    async getStoriesOfAComic({ comicId, limit, offset }) {
      const response = await request({ path: `comics/${comicId}/stories`, method, apiKey, privateKey, params: `limit=${limit}&offset=${offset}` })

      return response
    }
  }
}

module.exports = comics