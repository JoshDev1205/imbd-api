import { Elysia } from 'elysia'
import SearchRoutes from './routes/search'
import TitleRoutes from './routes/title'

const app: Elysia = new Elysia().use(SearchRoutes).use(TitleRoutes).listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
