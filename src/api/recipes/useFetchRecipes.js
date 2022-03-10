import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/actions';
//import {API_URL, API_TOKEN} from '@env';
// const { getAllRecipes } = useFetchRecipes()

const BASE_URL_API = 'https://api.spoonacular.com/recipes';
const API_KEY = '74d7f1d00bdf46fcbc66bd39123fb7ec';
const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  /*fetch(`${API_URL}/users`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`
    }
  })*/

  //on recupere les recettes du serveur
  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_URL_API}/complexSearch`, {
        params: {
          apiKey: API_KEY,
          number: MAX_PER_PAGE,
        },
      });
      // eslint-disable-next-line prettier/prettier
      //console.log('response', response.data.results);
      dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('Error in getAllRecipes', e);
    }
  };

  const getRecipeById = async id => {
    try {
      const response = await axios.get(`${BASE_URL_API}/${id}/information`, {
        params: {
          apiKey: API_KEY,
        },
      });
      console.log('response= ', response);
    } catch (e) {
      console.error('Erro in getRecipeById', e);
    }
  };

  return {
    getAllRecipes,
  };
};
