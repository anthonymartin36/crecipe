import Footer from './Footer.tsx'
import Nav from './Navbar.tsx'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getACocktailApi } from '../api/api-cocktails.ts'

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
        <img src="/client/images/catGif1.gif" alt="" />
        <h1 className="loading-heading">Something's broken!</h1>
      </div>
    )
  }

  if (!cocktail || isLoading) {
    return (
      <div className="loading">
        <img src="/client/images/catGif4.gif" alt="" />
        <h1 className="loading-heading">Just a Sec!!</h1>
      </div>
    )
  }
    return (
      <>
        <Nav />
        <div className="Cocktail">
            Cocktail : {cocktail.name}
        </div>
        <Footer />
      </>
    )
}

export default Cocktail