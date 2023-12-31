import './App.css'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/Hiring'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import AppLogo from './components/AppLogo'
import Career from './components/career/Career'
import Manager from './components/career/Manager'
import Ui from './components/career/Ui'
import Hiring from './pages/Hiring'
import Message from './components/home/Message'
import Getmessage from './components/home/Getmessage'
import { Slide } from 'react-slideshow-image'
import About from './components/home/About'
import Video from './components/home/Video'
import FormCV from './components/career/FormCV'
import Anim from './components/career/Anim'
import View from './components/career/felex/View'
import Hover from './components/career/hover/Hoverview'
import Hide from './components/career/felex/HideScrolling'
import Setphone from './components/career/setphone/Setphone'
import Zoom from './components/career/zoomefect/nidex'
import WA from './components/career/message/Viewform'
import Dropdown from './components/career/drpodown/Epp'
import Seemore from './components/career/seemore/Seeview'
import Detilnews from './components/career/detil/DetailPage'
import Sampledetil from './components/career/detil/ViewApp'
import Arrobj from './components/career/arrobj/Arrobj'
import Hera from './components/career/hero/Hero'
import HeroNews from './components/career/heroNews/HeroNews'
import HeroSlide from './components/career/hero/fixing_slide/Hero'
import SlideNew from './components/career/slide/Hero_slide'

import { 
  useQueryClient,
  QueryClient,
  QueryClientProvider, } 
  
from 'react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/career",
    element: <Career />
  },
  {
    path: "/manager",
    element: <Manager />
  },
  {
    path: "/ui",
    element: <Ui />,
  },
  {
    path: "/hiring",
    element: <Hiring />,
  },
  
  {
    path: "/cv",
    element: <FormCV />,
  },
  {
    path: "/anim",
    element: <Anim/>,
  },
  {
    path: "/message",
    element: <Message/>,
  },
  {
    path: "/getmessage",
    element: <Getmessage />,
  },
  {
    path: "/felex",
    element: <View />,
  },
  {
    path: "/hover",
    element: <Hover />,
  },
  {
    path: "/hide",
    element: <Hide />,
  },
  {
    path: "/vacancy/:id",
    element: <Career />,
  },
  {
    path: "/setphone",
    element: <Setphone />,
  },
  {
    path: "/zoom",
    element: <Zoom />,
  },
  {
    path: "/form",
    element: <WA />,
  },
  {
    path: "/dropdown",
    element: <Dropdown />,
  },
  {
    path: "/seemore",
    element: <Seemore />,
  },
  {
    path: "/detilnews/:id",
    element: <Detilnews />,
  },
  {
    path: "/sampledetil",
    element: <Sampledetil />,
  },
  {
    path: "/arrobj",
    element: <Arrobj />,
  },
  {
    path: "/hera",
    element: <Hera />,
  },
  {
    path: "/heroSlide",
    element: <HeroSlide />,
  },
  {
    path: "/slideShow",
    element: <SlideNew />,
  },
  {
    path: "/heroNews",
    element: <HeroNews />,
  },
]);

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <Helmet>
        <title>Makerindo - Build Solution Without Exception</title>
      </Helmet>
      
      <Navbar appLogo={<AppLogo />} />
      <div className="px-12">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
