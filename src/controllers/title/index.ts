import { Context } from 'elysia'
import { prisma as db } from '../../libs/prisma'

type ContextApp = Context<{
  params: {
    id: string
  }
}>

const byMovie = ({ params }: ContextApp) =>
  db.movie.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  })
const byEpisode = ({ params }: ContextApp) =>
  db.episode.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })
const byCast = ({ params }: ContextApp) =>
  db.person.findMany({
    where: {
      movies: {
        some: {
          id: parseInt(params.id, 10),
        },
      },
    },
  })
const byReview = ({ params }: ContextApp) =>
  db.review.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })
const byAward = ({ params }: ContextApp) =>
  db.award.findMany({
    where: {
      movieId: parseInt(params.id, 10),
    },
  })

export default {
  byMovie,
  byEpisode,
  byAward,
  byCast,
  byReview,
}
