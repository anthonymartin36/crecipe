import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getACocktailApi } from '../api/api-cocktails.ts'
import './Cocktail.css'

function Cocktail() {
  const { cId } = useParams()

  const {
    data: cocktail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cocktail', cId],
    queryFn: () => getACocktailApi(Number(cId)),
  })

  if (isError) {
    return (
      <div className="loading">
        <h1 className="loading-heading">Something's broken!</h1>
      </div>
    )
  }

  if (!cocktail || isLoading) {
    return (
      <div className="loading">
        <h1 className="loading-heading">Just a Sec!!</h1>
      </div>
    )
  }
    return (
      <>
        <Nav />
        <div className='cocktail' id='cocktail'>
        <div className='container' id='container'>
        <div className='content' key={cocktail.id}>
        <h2>Cocktail :   { cocktail.title } </h2> 
        <p>Description : { cocktail.description } </p>
        <p><img src={`../image/${cocktail.image}`}  alt={`${cocktail.description}`}/> </p>
        <h3>Ingredients</h3>
        {cocktail.ingredients.map((ingredient: any, index: any) => (
        <p key={index}>Ingredient: {index + 1}, Quantity: {ingredient.quantity}</p>
        ))}
        <h3>Directions</h3>
        {cocktail.directions.map((directions: any, index: any) => (
        <p key={index}>Step: {directions}</p>
        ))}
        </div>
        </div>
        </div>
        <Footer />
      </>
    )
}

export default Cocktail