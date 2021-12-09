## Characters

This is an example request to get a list of characters:

```js
const params = {
  limit: 35,
  offset: 0
}

await marvelClient.characters.get(params)
```

This is an example request to get a character data:

```js
const characterId = 1017100

await marvelClient.characters.getById(1017100)
```

This is an example request to get a character comics:

```js
const characterId = 1009351

const params = {
  limit: 45,
  offset: 1
}

await marvelClient.characters.getComics(characterId, params)
```

This is an example request to get a character events:

```js
const characterId = 1009351

const params = {
  limit: 45,
  offset: 1
}

await marvelClient.characters.getEvents(characterId, params)
```

This is an example request to get a character series:

```js
const characterId = 1009351

const params = {
  limit: 45,
  offset: 1
}

await marvelClient.characters.getSeries(characterId, params)
```

This is an example request to get a character stories:

```js
const characterId = 1009351

const params = {
  limit: 45,
  offset: 1
}

await marvelClient.characters.getStories(characterId, params)
```

## Comics

This is an example request to get a list of comics:

```js
const params = {
  limit: 35,
  offset: 0
}

await marvelClient.comics.get(params)
```

This is an example request to get a comic data:

```js
const comicId = 428

await marvelClient.comics.getById(comicId)
```

This is an example request to get a comic characters:

```js
const comicId = 158

const params = {
  limit: 3,
  offset: 1
}

await marvelClient.comics.getCharacters(comicId, params)
```

This is an example request to get a comic creators:

```js
const comicId = 158

const params = {
  limit: 3,
  offset: 0
}

await marvelClient.comics.getCreators(comicId, params)
```

This is an example request to get a comic events:

```js
const comicId = 158

const params = {
  limit: 15,
  offset: 0
}

await marvelClient.comics.getEvents(comicId, params)
```

This is an example request to get a comic stories:

```js
const comicId = 158

const params = {
  limit: 3,
  offset: 0
}

await marvelClient.comics.getStories(comicId, params)
```

## Creators

This is an example request to get a list of creators:

```js
const params = {
  limit: 30,
  offset: 0
}

await marvelClient.creators.get(params)
```

This is an example request to get a creator data:

```js
const creatorId = 682

await marvelClient.creators.getById(creatorId)
```

This is an example request to get a creator comics:

```js
const creatorId = 682

await marvelClient.creators.getComics(creatorId)
```

This is an example request to get creator events:

```js
const creatorId = 682

await marvelClient.creators.getEvents(creatorId)
```

This is an example request to get creator series:

```js
const creatorId = 682

await marvelClient.creators.getSeries(creatorId)
```

This is an example request to get creator stories:

```js
const creatorId = 682

await marvelClient.creators.getStories(creatorId)
```

## Events

This is an example request to get a list of events:

```js
const params = {
  limit: 15,
  offset: 0
}

await marvelClient.events.get(params)
```

This is an example request to get an event data:

```js
const eventId = 154

await marvelClient.events.getById(creatorId)
```

This is an example request to get an event characters:

```js
const eventId = 154

await marvelClient.events.getCharacters(creatorId)
```

This is an example request to get an event comics:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getComics(creatorId, params)
```

This is an example request to get an event characters:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getCharacters(creatorId, params)
```

This is an example request to get an event comics:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getComics(creatorId, params)
```

This is an example request to get an event creators:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getCharacters(creatorId, params)
```

This is an example request to get an event series:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getSeries(creatorId, params)
```

This is an example request to get an event stories:

```js
const eventId = 154

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.events.getStories(creatorId, params)
```

## Series

This is an example request to get a list of series:

```js
const params = {
  limit: 25,
  offset: 0
}

await marvelClient.series.get(params)
```

This is an example request to get a series data:

```js
const seriesId = 489

await marvelClient.series.getById(seriesId)
```

This is an example request to get a series characters:

```js
const seriesId = 489

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.series.getCharacters(seriesId, params)
```

This is an example request to get a series comics:

```js
const seriesId = 489

const params = {
  limit: 30,
  offset: 0
}

await marvelClient.series.getComics(seriesId, params)
```

This is an example request to get a series creators:

```js
const seriesId = 489

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.series.getCreators(seriesId, params)
```

This is an example request to get a series events:

```js
const seriesId = 489

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.series.getEvents(seriesId, params)
```

This is an example request to get a series stories:

```js
const seriesId = 489

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.series.getStories(seriesId, params)
```

## Stories

This is an example request to get a list of stories:

```js
const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.get(params)
```

This is an example request to get a story data:

```js
const storyId = 32

await marvelClient.stories.getById(storyId)
```

This is an example request to get a story characters:

```js
const storyId = 32

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.getCharacters(storyId, params)
```

This is an example request to get a story comics:

```js
const storyId = 32

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.getComics(storyId, params)
```

This is an example request to get a story creators:

```js
const storyId = 32

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.getCreators(storyId, params)
```

This is an example request to get a story events:

```js
const storyId = 32

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.getEvents(storyId, params)
```

This is an example request to get a story series:

```js
const storyId = 32

const params = {
  limit: 25,
  offset: 0
}

await marvelClient.stories.getSeries(storyId, params)
```