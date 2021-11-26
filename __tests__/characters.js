const Marvel = require('../')

let marvelClient;

describe('characters', () => {
  beforeEach(() => {
    marvelClient = Marvel({ apiKey: '6ae3b95f4925a4e32ca9789f413e43f7', privateKey: '8e94456fb554319d5fa072360987e16cb0e76f80' })
  })

  it('should retrieve the quantity of characters requested', async () => {
    const params = {
      limit: 20,
      offset: 1
    }

    const charactersResponse = await marvelClient.characters.getCharacters(params)

    expect(charactersResponse.code).toEqual(200)
    expect(charactersResponse.status).toBe('Ok')
    expect(charactersResponse.data.offset).toEqual(params.offset)
    expect(charactersResponse.data.limit).toEqual(params.limit)
    expect(charactersResponse.data.count).toEqual(params.limit)
    expect(charactersResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the detailed info about the character requested', async () => {
    const characterFound = await marvelClient.characters.getCharacterById({ characterId: 1017100 })

    expect(characterFound.code).toEqual(200)
    expect(characterFound.status).toBe('Ok')
    expect(characterFound).toHaveProperty('copyright')
    expect(characterFound).toHaveProperty('attributionText')
    expect(characterFound).toHaveProperty('attributionHTML')
    expect(characterFound).toHaveProperty('etag')
    expect(characterFound).toHaveProperty('data')
    expect(characterFound.data.results.length).toEqual(1)
  })

  it('should retrieve the comics of a character', async () => {
    const params = {
      characterId: 1009351,
      limit: 45,
      offset: 1
    }

    const comicsOfTheCharacterResponse = await marvelClient.characters.getComicsOfACharacter(params)

    expect(comicsOfTheCharacterResponse.code).toEqual(200)
    expect(comicsOfTheCharacterResponse.status).toBe('Ok')
    expect(comicsOfTheCharacterResponse.data.offset).toEqual(params.offset)
    expect(comicsOfTheCharacterResponse.data.limit).toEqual(params.limit)
    expect(comicsOfTheCharacterResponse.data.count).toEqual(params.limit)
    expect(comicsOfTheCharacterResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the events of a character', async () => {
    const params = {
      characterId: 1009351,
      limit: 10,
      offset: 1
    }

    const eventsOfTheCharacterResponse = await marvelClient.characters.getEventsOfACharacter(params)

    expect(eventsOfTheCharacterResponse.code).toEqual(200)
    expect(eventsOfTheCharacterResponse.status).toBe('Ok')
    expect(eventsOfTheCharacterResponse.data.offset).toEqual(params.offset)
    expect(eventsOfTheCharacterResponse.data.limit).toEqual(params.limit)
    expect(eventsOfTheCharacterResponse.data.count).toEqual(params.limit)
    expect(eventsOfTheCharacterResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the series of a character', async () => {
    const params = {
      characterId: 1009351,
      limit: 50,
      offset: 1
    }

    const seriesOfTheCharacterResponse = await marvelClient.characters.getSeriesOfACharacter(params)

    expect(seriesOfTheCharacterResponse.code).toEqual(200)
    expect(seriesOfTheCharacterResponse.status).toBe('Ok')
    expect(seriesOfTheCharacterResponse.data.offset).toEqual(params.offset)
    expect(seriesOfTheCharacterResponse.data.limit).toEqual(params.limit)
    expect(seriesOfTheCharacterResponse.data.count).toEqual(params.limit)
    expect(seriesOfTheCharacterResponse.data.results.length).toEqual(params.limit)
  })

  it('should retrieve the stories of a character', async () => {
    const params = {
      characterId: 1009351,
      limit: 25,
      offset: 1
    }

    const storiesOfTheCharacterResponse = await marvelClient.characters.getStoriesOfACharacter(params)

    expect(storiesOfTheCharacterResponse.code).toEqual(200)
    expect(storiesOfTheCharacterResponse.status).toBe('Ok')
    expect(storiesOfTheCharacterResponse.data.offset).toEqual(params.offset)
    expect(storiesOfTheCharacterResponse.data.limit).toEqual(params.limit)
    expect(storiesOfTheCharacterResponse.data.count).toEqual(params.limit)
    expect(storiesOfTheCharacterResponse.data.results.length).toEqual(params.limit)
  })
})