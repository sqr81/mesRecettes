import {ADD_RECIPES, SELECTED_RECIPE, ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionsType';

//Tasks
// ADD_TASK
export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title: title,
    },
  };
}

// TOGGLE_TASK
// on nomme l'action
// autre possibilité par rapport à ADD_TASK
export const toggleTask = id => ({
  type: TOGGLE_TASK,
  //ici on va créer un objet
  payload: {id},
});

// DELETE_TASK
// on nomme l'action
export const deleteTask = id => ({
  type: DELETE_TASK,
  //ici on va créer un objet
  payload: {id},
});


//Recipes
export const addRecipes = data => ({
  type: ADD_RECIPES,
  payload: {
    data,
  },
});

export const selectedRecipe = data => ({
  type: SELECTED_RECIPE,
  payload: {
    data,
  },
});

