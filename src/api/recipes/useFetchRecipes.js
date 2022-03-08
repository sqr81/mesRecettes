import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/actions';
//import {API_URL, API_TOKEN} from '@env';
// const { getAllRecipes } = useFetchRecipes()

const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
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
      const response = await axios.get(URL_API, {
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

  return {
    getAllRecipes,
  };
};
