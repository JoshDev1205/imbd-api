import { Elysia, t } from 'elysia'
import SearchControllers from '../controllers/search'

const search = new Elysia().group('/search', (app) =>
  app.get('/', SearchControllers.allMovies).guard(
    {
      query: t.Object({
        q: t.String(),
      }),
    },
    (app) =>
      app
        .get('/movie', SearchControllers.movieByTitle)
        .get('/tv', SearchControllers.seriesByTitle)
        .get('/person', SearchControllers.personByName)
        .get('/episode', SearchControllers.episodeByTitle)
        .get('/review', SearchControllers.reviewByComment)
        .get('/award', SearchControllers.awardByName)
  )
)

export default search
