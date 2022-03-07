import axios from 'axios';
// const { getAllRecipes } = useFetchRecipes()

const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '74d7f1d00bdf46fcbc66bd39123fb7ec'
const MAX_RESULT = 30

export const useFetchRecipes = () => {
  const getAllRecipes = async () => {
    try {
      const response = await axios.get(URL_API, {
          apiKey = API_KEY,
          number = MAX_RESULT,
      })
      // eslint-disable-next-line prettier/prettier
      console.log('response', response.data.results)

    } catch (e) {
      console.erreur('Error in getAllRecipes', e);
    }
  }

  return {
    getAllRecipes
  }
}
