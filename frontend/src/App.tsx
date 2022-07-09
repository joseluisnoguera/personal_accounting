import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Routes from './routes/PublicRoutes'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
