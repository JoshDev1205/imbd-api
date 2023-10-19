import Elysia from 'elysia'
import TitleControllers from '../controllers/title'

const title = new Elysia().group('/title/:id', (app) => {
  return app
    .get('/', TitleControllers.byMovie)
    .get('/episodes', TitleControllers.byEpisode)
    .get('/cast', TitleControllers.byCast)
    .get('/reviews', TitleControllers.byReview)
    .get('/awards', TitleControllers.byAward)
})

export default title
