
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from './views/Home'
import { Navbar } from './components/NavBar'
import { AboutUs } from './views/AboutUs'
import { NotFound } from './views/NotFound'

const AppRouter = () => {


  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about_us', element: <AboutUs />},
    { path: '/*', element: <NotFound />}
  ])
  return routes
}


export const App = () : JSX.Element  => {

  return (
        <main>
          <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
      </main>
  )
}
