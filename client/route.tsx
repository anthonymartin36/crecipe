import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import App from './components/App'
  import Home from './components/Home'
  import Cocktails from './components/Cocktails' // <Route path="cocktails/" index element={<Cocktails />} />    
  import Cocktail from './components/Cocktail' // <Route path="cocktail" element={<Cocktail />} />
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cocktail/" element={<Cocktails />} />
          <Route path="cocktail/:cId" index element={<Cocktail />} />        </Route>
      </>,
    ),
  )
 
  export default router