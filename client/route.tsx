import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import App from './components/App'
  import Home from './components/Home'
  import Cocktails from './components/Cocktail' // <Route path="cocktails/" index element={<Cocktails />} />    
  //import Cocktail from './components/Cocktail' <Route path="cocktail" element={<Cocktail />} />
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cocktails/:cId" index element={<Cocktails />} />        </Route>
      </>,
    ),
  )
 
  export default router