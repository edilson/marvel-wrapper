const Marvel = require('../')

let marvelClient;

describe('series', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: process.env.API_KEY, privateKey: process.env.PRIVATE_KEY })
  })

  it('should retrieve the quantity of series requested', async () => {
    const seriesResponse = await marvelClient.series.get()

    expect(seriesResponse.code).toEqual(200)
    expect(seriesResponse.status).toBe('Ok')
    expect(seriesResponse.data.offset).toEqual(0)
    expect(seriesResponse.data.limit).toEqual(20)
    expect(seriesResponse.data.count).toEqual(20)
    expect(seriesResponse.data.results.length).toEqual(20)
  })

  it('should retrieve the detailed info about the series requested', async () => {
    const seriesFound = await marvelClient.series.getById(31445)

    expect(seriesFound.code).toEqual(200)
    expect(seriesFound.status).toBe('Ok')
    expect(seriesFound).toHaveProperty('copyright')
    expect(seriesFound).toHaveProperty('attributionText')
    expect(seriesFound).toHaveProperty('attributionHTML')
    expect(seriesFound).toHaveProperty('etag')
    expect(seriesFound).toHaveProperty('data')
    expect(seriesFound.data.results.length).toEqual(1)
  })

  it('should retrieve the characters of a serie', async () => {
    const seriesId = 489

    const params = {
      limit: 9,
      offset: 0
    }

    const seriesCharactersResponse = await marvelClient.series.getCharacters(seriesId, params)

    expect(seriesCharactersResponse.code).toEqual(200)
    expect(seriesCharactersResponse.status).toBe('Ok')
    expect(seriesCharactersResponse.data.offset).toEqual(params.offset)
    expect(seriesCharactersResponse.data.limit).toEqual(params.limit)
    expect(seriesCharactersResponse.data.count).toEqual(params.limit)
    expect(seriesCharactersResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the comics of a serie', async () => {
    const seriesId = 489

    const params = {
      limit: 8,
      offset: 0
    }

    const serieComicsResponse = await marvelClient.series.getComics(seriesId, params)

    expect(serieComicsResponse.code).toEqual(200)
    expect(serieComicsResponse.status).toBe('Ok')
    expect(serieComicsResponse.data.offset).toEqual(params.offset)
    expect(serieComicsResponse.data.limit).toEqual(params.limit)
    expect(serieComicsResponse.data.count).toEqual(params.limit)
    expect(serieComicsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the creators of a serie', async () => {
    const seriesId = 489

    const params = {
      limit: 3,
      offset: 0
    }

    const serieCreatorsResponse = await marvelClient.series.getCreators(seriesId, params)

    expect(serieCreatorsResponse.code).toEqual(200)
    expect(serieCreatorsResponse.status).toBe('Ok')
    expect(serieCreatorsResponse.data.offset).toEqual(params.offset)
    expect(serieCreatorsResponse.data.limit).toEqual(params.limit)
    expect(serieCreatorsResponse.data.count).toEqual(params.limit)
    expect(serieCreatorsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the events of a serie', async () => {
    const seriesId = 489

    const serieEventsResponse = await marvelClient.series.getEvents(seriesId)

    expect(serieEventsResponse.code).toEqual(200)
    expect(serieEventsResponse.status).toBe('Ok')
    expect(serieEventsResponse.data.offset).toEqual(0)
    expect(serieEventsResponse.data.limit).toEqual(20)
    expect(serieEventsResponse.data.count).toEqual(0)
    expect(serieEventsResponse.data.results.length).toEqual(0)
  })

  it('should retrieve the stories of a serie', async () => {
    const seriesId = 489

    const params = {
      limit: 10,
      offset: 0
    }

    const serieStoriesResponse = await marvelClient.series.getStories(seriesId, params)

    expect(serieStoriesResponse.code).toEqual(200)
    expect(serieStoriesResponse.status).toBe('Ok')
    expect(serieStoriesResponse.data.offset).toEqual(params.offset)
    expect(serieStoriesResponse.data.limit).toEqual(params.limit)
    expect(serieStoriesResponse.data.count).toEqual(params.limit)
    expect(serieStoriesResponse.data.results.length).toEqual(params.limit)
  })
})