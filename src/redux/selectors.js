//Recipes
export const getRecipesList = store => store.recipes.list
export const getSelectedRecipe = store => store.recipes.selectedRecipe

//Tasks
// Selectors: selectionner une partie de notre store
export const getTasks = store => store.tasksList;
/*Autre facon de l'ecrire:
export function getTasks(store){
    return store.tasksList
} */
export const getCompletedTasks = store =>
  store.tasksList.filter(task => task.completed);