const Marvel = require('../')

let marvelClient;

describe('comics', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: process.env.API_KEY, privateKey: process.env.PRIVATE_KEY })
  })

  it('should retrieve the quantity of comics requested', async () => {
    const params = {
      limit: 20,
      offset: 1
    }

    const comicsResponse = await marvelClient.comics.get(params)

    expect(comicsResponse.code).toEqual(200)
    expect(comicsResponse.status).toBe('Ok')
    expect(comicsResponse.data.offset).toEqual(params.offset)
    expect(comicsResponse.data.limit).toEqual(params.limit)
    expect(comicsResponse.data.count).toEqual(params.limit)
    expect(comicsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the detailed info about the comic requested', async () => {
    const comicFound = await marvelClient.comics.getById(428)

    expect(comicFound.code).toEqual(200)
    expect(comicFound.status).toBe('Ok')
    expect(comicFound).toHaveProperty('copyright')
    expect(comicFound).toHaveProperty('attributionText')
    expect(comicFound).toHaveProperty('attributionHTML')
    expect(comicFound).toHaveProperty('etag')
    expect(comicFound).toHaveProperty('data')
    expect(comicFound.data.results.length).toEqual(1)
  })

  it('should retrieve the characters of a comic', async () => {
    const comicId = 158

    const params = {
      limit: 3,
      offset: 1
    }

    const charactersOfAComicResponse = await marvelClient.comics.getCharacters(comicId, params)

    expect(charactersOfAComicResponse.code).toEqual(200)
    expect(charactersOfAComicResponse.status).toBe('Ok')
    expect(charactersOfAComicResponse.data.offset).toEqual(params.offset)
    expect(charactersOfAComicResponse.data.limit).toEqual(params.limit)
    expect(charactersOfAComicResponse.data.count).toEqual(params.limit)
    expect(charactersOfAComicResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the creators of a comic', async () => {
    const comicId = 158

    const params = {
      limit: 7,
      offset: 1
    }

    const creatorsOfAComicResponse = await marvelClient.comics.getCreators(comicId, params)

    expect(creatorsOfAComicResponse.code).toEqual(200)
    expect(creatorsOfAComicResponse.status).toBe('Ok')
    expect(creatorsOfAComicResponse.data.offset).toEqual(params.offset)
    expect(creatorsOfAComicResponse.data.limit).toEqual(params.limit)
    expect(creatorsOfAComicResponse.data.count).toEqual(params.limit)
    expect(creatorsOfAComicResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the stories of a comic', async () => {
    const comicId = 1308

    const params = {
      limit: 8,
      offset: 1
    }

    const storiesOfTheComicResponse = await marvelClient.comics.getStories(comicId, params)

    expect(storiesOfTheComicResponse.code).toEqual(200)
    expect(storiesOfTheComicResponse.status).toBe('Ok')
    expect(storiesOfTheComicResponse.data.offset).toEqual(params.offset)
    expect(storiesOfTheComicResponse.data.limit).toEqual(params.limit)
    expect(storiesOfTheComicResponse.data.count).toEqual(params.limit)
    expect(storiesOfTheComicResponse.data.results.length).toEqual(params.limit)
  })
})