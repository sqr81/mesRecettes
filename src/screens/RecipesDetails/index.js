import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {getSelectedRecipe} from '../../redux/selectors';

export default function RecipesDetails({route, navigation}) {
  const {id} = route.params;
  console.log('ID=', id);
  const {getRecipeById} = useFetchRecipes();

  const recipe = useSelector(getSelectedRecipe);

  useEffect(() => {
    getRecipeById(id)
  }, []);

  return (
    <>
      <Text>{id}</Text>
      <Text>{recipe.title}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Revenir</Text>
      </TouchableOpacity>
    </>
  );
}
