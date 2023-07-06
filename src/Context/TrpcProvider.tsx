import { httpBatchLink } from '@trpc/client'
import { trpcReact } from '../utils/trpcClient'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const TrpcProvider = ({ children }: { children: ReactNode }) => {
   const [queryClient] = useState(() => new QueryClient())
   const [trpcClient] = useState(() =>
      trpcReact.createClient({
         links: [
            httpBatchLink({
               url: 'http://localhost:4000/trpc',
               // You can pass any HTTP headers you wish here
               headers() {
                  return {
                     // authorization: getAuthCookie(),
                  }
               }
            })
         ]
      })
   )

   return (
      <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </trpcReact.Provider>
   )
}
