import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom'
  import App from './components/App'
  import Home from './components/Home'
  import Cocktails from './components/Cocktails'   
  import Cocktail from './components/Cocktail' 
  import Ingredient from './components/Ingredient'  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cocktail/" element={<Cocktails />} />
          <Route path="cocktail/:cId"  element={<Cocktail />} />        
          <Route path="/cocktail/:cId/:ingredient" element={<Ingredient/>}/>
        </Route>
      </>,
    ),
  )
 
  export default router