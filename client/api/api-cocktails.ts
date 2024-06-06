import request from 'superagent'
// import { Cocktail } from '../../models/cocktails'
const rootUrl = import.meta.env.VITE_API_URL //|| 'https://cocktail-z2ed.onrender.com/api/v1/cocktails/'

export async function getAllCocktailApi(){ 
    try {
      const response = await request.get(`${rootUrl}`)
      return response.body
    } catch (error) {
      throw console.error('Error fetching missing cocktails', error)
    }
  }

  export async function getACocktailApi(cId: number) {
    try {
      const response = await request.get(`${rootUrl}/${cId}`)
      return response.body
    } catch (error) {
        console.error(`Error fetching cocktail with id ${cId}: `, error)
        throw new Error(`Failed to fetch cocktail with id ${cId}`)
    }
    
  }

  export async function getAIngredient(ingredient: string) {
    try {
      const response = await request.get(`${rootUrl}/filter/${ingredient}`)
      return response.body
    } catch (error) {
        console.error(`Error fetching cocktail with id ${ingredient}: `, error)
        throw new Error(`Failed to fetch cocktail with id ${ingredient}`)
    }
    
  }