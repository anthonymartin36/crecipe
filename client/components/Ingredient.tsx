import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import {Link,  useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAIngredient } from '../api/api-cocktails.ts'
import './Cocktail.css'

function Ingredient() {
  const { ingredient } = useParams()

  const {
    data: cocktail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cocktail', ingredient],
    queryFn: () => getAIngredient(String(ingredient)),
  })

  if (isError) {
    return (
    <><Nav />
      <div className="loading" id="loading">
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
      <div className="loading" id="loading">
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
      <div className='content' >
      <h2>Cocktails containing :  { ingredient } </h2> 
      {cocktail.map((index: any) => (
        <p key={index.id}> <Link to={`/cocktail/${index.id}`} >{index.title} : {index.description}</Link> </p>
        ))}
      </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Ingredient