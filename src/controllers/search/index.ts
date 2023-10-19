import { Handler } from 'elysia'
import { prisma as db } from '../../libs/prisma'
const allMovies: Handler = () => db.movie.findMany()
const movieByTitle: Handler = ({ query }) =>
  db.movie.findMany({
    where: {
      title: {
        contains: query.q as string,
      },
    },
  })

const seriesByTitle: Handler = ({ query }) =>
  db.movie.findMany({
    where: {
      title: {
        contains: query.q as string,
      },
      type: 'series',
    },
  })
const personByName: Handler = async ({ query }) =>
  db.person.findMany({
    where: {
      name: {
        contains: query.q as string,
      },
    },
  })
const episodeByTitle: Handler = async ({ query }) =>
  db.episode.findMany({
    where: {
      title: {
        contains: query.q as string,
      },
    },
  })
const reviewByComment: Handler = async ({ query }) =>
  db.review.findMany({
    where: {
      comment: {
        contains: query.q as string,
      },
    },
  })
const awardByName: Handler = async ({ query }) =>
  db.award.findMany({
    where: {
      name: {
        contains: query.q as string,
      },
    },
  })

export default {
  allMovies,
  movieByTitle,
  seriesByTitle,
  personByName,
  episodeByTitle,
  reviewByComment,
  awardByName,
}
