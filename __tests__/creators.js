const Marvel = require('../')

let marvelClient;

describe('creators', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: process.env.API_KEY, privateKey: process.env.PRIVATE_KEY })
  })

  it('should retrieve the quantity of creators requested', async () => {
    const params = {
      limit: 35,
      offset: 0
    }

    const creatorsResponse = await marvelClient.creators.getCreators(params)

    expect(creatorsResponse.code).toEqual(200)
    expect(creatorsResponse.status).toBe('Ok')
    expect(creatorsResponse.data.offset).toEqual(params.offset)
    expect(creatorsResponse.data.limit).toEqual(params.limit)
    expect(creatorsResponse.data.count).toEqual(params.limit)
    expect(creatorsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the detailed info about the creator requested', async () => {
    const creatorFound = await marvelClient.creators.getCreatorById({ creatorId: 682 })

    expect(creatorFound.code).toEqual(200)
    expect(creatorFound.status).toBe('Ok')
    expect(creatorFound).toHaveProperty('copyright')
    expect(creatorFound).toHaveProperty('attributionText')
    expect(creatorFound).toHaveProperty('attributionHTML')
    expect(creatorFound).toHaveProperty('etag')
    expect(creatorFound).toHaveProperty('data')
    expect(creatorFound.data.results.length).toEqual(1)
  })

  it('should retrieve the comics of a creator', async () => {
    const params = {
      creatorId: 326,
      limit: 3,
      offset: 0
    }

    const comicsOfACreatorResponse = await marvelClient.creators.getCreatorComics(params)

    expect(comicsOfACreatorResponse.code).toEqual(200)
    expect(comicsOfACreatorResponse.status).toBe('Ok')
    expect(comicsOfACreatorResponse.data.offset).toEqual(params.offset)
    expect(comicsOfACreatorResponse.data.limit).toEqual(params.limit)
    expect(comicsOfACreatorResponse.data.count).toEqual(params.limit)
    expect(comicsOfACreatorResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the events of a creator', async () => {
    const params = {
      creatorId: 682,
      limit: 1,
      offset: 0
    }

    const creatorEventsResponse = await marvelClient.creators.getCreatorEvents(params)

    expect(creatorEventsResponse.code).toEqual(200)
    expect(creatorEventsResponse.status).toBe('Ok')
    expect(creatorEventsResponse.data.offset).toEqual(params.offset)
    expect(creatorEventsResponse.data.limit).toEqual(params.limit)
    expect(creatorEventsResponse.data.count).toEqual(params.limit)
    expect(creatorEventsResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the series of a creator', async () => {
    const params = {
      creatorId: 682,
      limit: 25,
      offset: 0
    }

    const creatorSeriesResponse = await marvelClient.creators.getCreatorSeries(params)

    expect(creatorSeriesResponse.code).toEqual(200)
    expect(creatorSeriesResponse.status).toBe('Ok')
    expect(creatorSeriesResponse.data.offset).toEqual(params.offset)
    expect(creatorSeriesResponse.data.limit).toEqual(params.limit)
    expect(creatorSeriesResponse.data.count).toEqual(params.limit)
    expect(creatorSeriesResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the stories of a creator', async () => {
    const params = {
      creatorId: 682,
      limit: 45,
      offset: 0
    }

    const creatorStoriesResponse = await marvelClient.creators.getCreatorStories(params)

    expect(creatorStoriesResponse.code).toEqual(200)
    expect(creatorStoriesResponse.status).toBe('Ok')
    expect(creatorStoriesResponse.data.offset).toEqual(params.offset)
    expect(creatorStoriesResponse.data.limit).toEqual(params.limit)
    expect(creatorStoriesResponse.data.count).toEqual(params.limit)
    expect(creatorStoriesResponse.data.results.length).toEqual(params.limit)
  })
})