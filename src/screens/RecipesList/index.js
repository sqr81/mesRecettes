import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {useFetchRecipes} from '../../api/recipes/useFetchRecipes';
import {getRecipesList} from '../../redux/selectors';
import RecipeTile from './RecipeTile';

export default function RecipesList({navigation}) {
  const {getAllRecipes} = useFetchRecipes();

  const allRecipes = useSelector(getRecipesList);
  //console.log('ALL RECIPES', allRecipes);

  useEffect(() => {
    getAllRecipes();
  }, []);

  const renderItem = ({item}) => (
    <RecipeTile navigation={navigation} item={item} />
  );

  return (
    <FlatList
      data={allRecipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
