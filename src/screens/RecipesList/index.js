import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
export default function RecipesList() {
  const {getAllRecipes} = useFetchRecipes();

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <Text>Recipes List</Text>
    </>
  );
}
