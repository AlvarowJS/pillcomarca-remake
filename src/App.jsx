import { ThemeProvider } from '@emotion/react'
import React from 'react'
import AppRouter from './router/AppRouter'
import { lightTheme } from './themes'
const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App