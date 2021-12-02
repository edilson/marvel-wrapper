const Marvel = require('../')

let marvelClient;

describe('events', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: process.env.API_KEY, privateKey: process.env.PRIVATE_KEY })
  })

  it('should retrieve the quantity of events requested', async () => {
    const params = {
      limit: 45,
      offset: 0
    }

    const eventsResponse = await marvelClient.events.get(params)

    expect(eventsResponse.code).toEqual(200)
    expect(eventsResponse.status).toBe('Ok')
    expect(eventsResponse.data.offset).toEqual(params.offset)
    expect(eventsResponse.data.limit).toEqual(params.limit)
    expect(eventsResponse.data.count).toEqual(params.limit)
    expect(eventsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the detailed info about the event requested', async () => {
    const eventFound = await marvelClient.events.getById(154)

    expect(eventFound.code).toEqual(200)
    expect(eventFound.status).toBe('Ok')
    expect(eventFound).toHaveProperty('copyright')
    expect(eventFound).toHaveProperty('attributionText')
    expect(eventFound).toHaveProperty('attributionHTML')
    expect(eventFound).toHaveProperty('etag')
    expect(eventFound).toHaveProperty('data')
    expect(eventFound.data.results.length).toEqual(1)
  })

  it('should retrieve the comics of an event', async () => {
    const eventId = 154

    const params = {
      limit: 25,
      offset: 0
    }

    const eventComicsResponse = await marvelClient.events.getComics(eventId, params)

    expect(eventComicsResponse.code).toEqual(200)
    expect(eventComicsResponse.status).toBe('Ok')
    expect(eventComicsResponse.data.offset).toEqual(params.offset)
    expect(eventComicsResponse.data.limit).toEqual(params.limit)
    expect(eventComicsResponse.data.count).toEqual(params.limit)
    expect(eventComicsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the characters of an event', async () => {
    const eventId = 154

    const params = {
      limit: 60,
      offset: 0
    }

    const eventCharactersResponse = await marvelClient.events.getCharacters(eventId, params)

    expect(eventCharactersResponse.code).toEqual(200)
    expect(eventCharactersResponse.status).toBe('Ok')
    expect(eventCharactersResponse.data.offset).toEqual(params.offset)
    expect(eventCharactersResponse.data.limit).toEqual(params.limit)
    expect(eventCharactersResponse.data.count).toEqual(params.limit)
    expect(eventCharactersResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the creators of an event', async () => {
    const eventId = 154

    const params = {
      limit: 10,
      offset: 0
    }

    const eventCreatorsResponse = await marvelClient.events.getCreators(eventId, params)

    expect(eventCreatorsResponse.code).toEqual(200)
    expect(eventCreatorsResponse.status).toBe('Ok')
    expect(eventCreatorsResponse.data.offset).toEqual(params.offset)
    expect(eventCreatorsResponse.data.limit).toEqual(params.limit)
    expect(eventCreatorsResponse.data.count).toEqual(params.limit)
    expect(eventCreatorsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the series of an event', async () => {
    const eventId = 154

    const params = {
      limit: 25,
      offset: 0
    }

    const eventSeriesResponse = await marvelClient.events.getSeries(eventId, params)

    expect(eventSeriesResponse.code).toEqual(200)
    expect(eventSeriesResponse.status).toBe('Ok')
    expect(eventSeriesResponse.data.offset).toEqual(params.offset)
    expect(eventSeriesResponse.data.limit).toEqual(params.limit)
    expect(eventSeriesResponse.data.count).toEqual(params.limit)
    expect(eventSeriesResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the stories of an event', async () => {
    const eventId = 154

    const params = {
      limit: 55,
      offset: 0
    }

    const eventStoriesResponse = await marvelClient.events.getStories(eventId, params)

    expect(eventStoriesResponse.code).toEqual(200)
    expect(eventStoriesResponse.status).toBe('Ok')
    expect(eventStoriesResponse.data.offset).toEqual(params.offset)
    expect(eventStoriesResponse.data.limit).toEqual(params.limit)
    expect(eventStoriesResponse.data.count).toEqual(params.limit)
    expect(eventStoriesResponse.data.results.length).toEqual(params.limit)
  })
})