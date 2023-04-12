import {
   useMediaQuery,
   createTheme,
   Theme,
   CssBaseline,
   ThemeProvider
} from '@mui/material'
import React, {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useMemo,
   useState
} from 'react'

interface IPaletteContext {
   setDark: (darkMode: boolean) => void
   flipPaletteMode: () => void
}

const PaletteContext = createContext<IPaletteContext>({} as IPaletteContext)

export const AuctionThemeProvider = ({ children }: { children: ReactNode }) => {
   const hasSetMode = sessionStorage.getItem('paletteMode')
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
   const [dark, setDark] = useState<boolean>(!!hasSetMode ?? prefersDarkMode)

   const [theme, setTheme] = useState<Theme>(
      createTheme({
         palette: {
            mode: dark ? 'dark' : 'light'
         }
      })
   )

   useEffect(() => {
      setTheme(
         createTheme({
            palette: {
               mode: dark ? 'dark' : 'light'
            }
         })
      )
   }, [dark])

   const memo = useMemo(() => {
      return {
         setDark: (mode: boolean) => {
            sessionStorage.setItem('paletteMode', mode ? 'true' : '')
            setDark(mode)
         },
         flipPaletteMode: () => {
            let newValue = !dark
            sessionStorage.setItem('paletteMode', newValue ? 'true' : '')
            setDark(newValue)
         }
      }
   }, [dark])

   return (
      <PaletteContext.Provider value={memo}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      </PaletteContext.Provider>
   )
}

export default function usePalette() {
   return useContext(PaletteContext)
}
