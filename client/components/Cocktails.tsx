import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import { useQuery } from '@tanstack/react-query'
import { getAllCocktailApi } from '../api/api-cocktails.ts'
import { Link } from 'react-router-dom'
import './Cocktail.css'
const imageUrl = import.meta.env.VITE_IMAGE_URL

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
        <div className='content'>
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
        <div className='content'>
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
            <h2>List of Cocktail</h2>
            {cocktail.map((c : any) => ( 
        <div className='content' key={c.id} >
        <p> 
        <div className='cocktails' id='cocktails'> <img src={`${imageUrl}${c.image}`} alt={c.description}/>
          <Link className="cocktail-list-name" to={`${c.id}`} >{c.title}</Link> <br/>{c.description}</div></p> 
        </div>
        ))}
        </div> </div>
        <Footer />
      </>
    )
}

export default Cocktails