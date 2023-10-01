import * as trpcNext from '@trpc/server/adapters/next'
import { serverRouter } from '../../../server/router'
import { createContext } from '../../../server/context'

const trpcHandler = trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext,
})

export default trpcHandler
