import './App.css'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/Hiring'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import AppLogo from './components/AppLogo'
import Career from './components/career/Career'
import List from './components/career/list'
import Hiring from './pages/Hiring'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/hiring",
    element: <Hiring />,
  },
]);

function App() {
  return (
    <>
      <Helmet>
        <title>Makerindo - Build Solution Without Exception</title>
      </Helmet>
      {/* <createBrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/career" element={<Career/>}/>
        </Routes>
        <div class="px-12"></div>
      </createBrowserRouter> */}
      <Navbar appLogo={<AppLogo />} />
      <div className="px-12">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
