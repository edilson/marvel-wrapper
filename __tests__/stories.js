const Marvel = require('../')

let marvelClient;

describe('stories', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: process.env.API_KEY, privateKey: process.env.PRIVATE_KEY })
  })

  it('should retrieve the quantity of stories requested', async () => {
    const params = {
      offset: 0,
      limit: 30
    }

    const storiesResponse = await marvelClient.stories.get(params)

    expect(storiesResponse.code).toEqual(200)
    expect(storiesResponse.status).toBe('Ok')
    expect(storiesResponse.data.offset).toEqual(params.offset)
    expect(storiesResponse.data.limit).toEqual(params.limit)
    expect(storiesResponse.data.count).toEqual(params.limit)
    expect(storiesResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the detailed info about the story requested', async () => {
    const storyFound = await marvelClient.stories.getById(18)

    expect(storyFound.code).toEqual(200)
    expect(storyFound.status).toBe('Ok')
    expect(storyFound).toHaveProperty('copyright')
    expect(storyFound).toHaveProperty('attributionText')
    expect(storyFound).toHaveProperty('attributionHTML')
    expect(storyFound).toHaveProperty('etag')
    expect(storyFound).toHaveProperty('data')
    expect(storyFound.data.results.length).toEqual(1)
  })

  it('should retrieve the characters of a story', async () => {
    const storyId = 7

    const storyCharactersResponse = await marvelClient.stories.getCharacters(storyId)

    expect(storyCharactersResponse.code).toEqual(200)
    expect(storyCharactersResponse.status).toBe('Ok')
    expect(storyCharactersResponse.data.offset).toEqual(0)
    expect(storyCharactersResponse.data.limit).toEqual(20)
    expect(storyCharactersResponse.data.count).toEqual(0)
    expect(storyCharactersResponse.data.results.length).toEqual(0)
  })

  it('should retrieve the comics of a story', async () => {
    const storyId = 18

    const storyComicsResponse = await marvelClient.stories.getComics(storyId)

    expect(storyComicsResponse.code).toEqual(200)
    expect(storyComicsResponse.status).toBe('Ok')
    expect(storyComicsResponse.data.offset).toEqual(0)
    expect(storyComicsResponse.data.limit).toEqual(20)
    expect(storyComicsResponse.data.count).toEqual(1)
    expect(storyComicsResponse.data.results.length).toEqual(1)
  })

  it('should retrieve the creators of a story', async () => {
    const storyId = 18

    const serieCreatorsResponse = await marvelClient.stories.getCreators(storyId)

    expect(serieCreatorsResponse.code).toEqual(200)
    expect(serieCreatorsResponse.status).toBe('Ok')
    expect(serieCreatorsResponse.data.offset).toEqual(0)
    expect(serieCreatorsResponse.data.limit).toEqual(20)
    expect(serieCreatorsResponse.data.count).toEqual(0)
    expect(serieCreatorsResponse.data.results.length).toEqual(0)
  })

  it('should retrieve the events of a story', async () => {
    const storyId = 32

    const storyEventsResponse = await marvelClient.stories.getEvents(storyId)

    expect(storyEventsResponse.code).toEqual(200)
    expect(storyEventsResponse.status).toBe('Ok')
    expect(storyEventsResponse.data.offset).toEqual(0)
    expect(storyEventsResponse.data.limit).toEqual(20)
    expect(storyEventsResponse.data.count).toEqual(0)
    expect(storyEventsResponse.data.results.length).toEqual(0)
  })

  it('should retrieve the series of a story', async () => {
    const storyId = 32

    const params = {
      limit: 1,
      offset: 0
    }

    const storySeriesResponse = await marvelClient.stories.getSeries(storyId, params)

    expect(storySeriesResponse.code).toEqual(200)
    expect(storySeriesResponse.status).toBe('Ok')
    expect(storySeriesResponse.data.offset).toEqual(params.offset)
    expect(storySeriesResponse.data.limit).toEqual(params.limit)
    expect(storySeriesResponse.data.count).toEqual(params.limit)
    expect(storySeriesResponse.data.results.length).toEqual(params.limit)
  })
})