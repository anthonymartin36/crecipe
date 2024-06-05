import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import { useQuery } from '@tanstack/react-query'
import { getAllCocktailApi } from '../api/api-cocktails.ts'
import { Link } from 'react-router-dom'
import './Cocktail.css'

function Cocktails() {
    //const { data } = useFruits()
    const {
      data: cocktail,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ['cocktail'],
      queryFn: () => getAllCocktailApi(),
    })

    if (isError) {
      return (
        <><Nav />
        <div className="loading"  id="loading">
        <div className='container' id='container'>
          <h1 className="loading-heading">Something's broken!</h1>
        </div>
        </div>
        <Footer /></>
      )
    }
  
    if (!cocktail || isLoading) {
      return (
        <><Nav />
        <div className="loading"  id="loading">
        <div className='container' id='container'>
          <h1 className="loading-heading">Just a Sec!!</h1>
          <p> This site may take 20 seconds to warm up! Please wait ... </p>
        </div>
        </div>
        <Footer /></>
      )
    }

    return (
      <>
        <Nav />
        <div className='cocktail' id='cocktail'>
        <div className='container' id='container'>
            List of Cocktail
            {cocktail.map((c : any) => ( 
        <div className='content' key={c.id} >
        <p> <Link className="cocktail-list-name" to={`${c.id}`} >{c.title}</Link> </p> 
        </div>
        ))}
        </div> </div>
        <Footer />
      </>
    )
}

export default Cocktails