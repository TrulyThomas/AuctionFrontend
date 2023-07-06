import type { AppRouter } from '../../../AuctionBackend/src/index'
import { createTRPCReact } from '@trpc/react-query'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

export const trpcReact = createTRPCReact<AppRouter>()

export const trpcClient = createTRPCProxyClient<AppRouter>({
   links: [
      httpBatchLink({
         url: 'http://localhost:3000/trpc'
      })
   ]
})
