import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../actions/actionsType';
// Reducers: fonctions retournent un nouveau state
const initialState = [{id: 1, title: 'Init task', isCompleted: false}];

export const tasksList = (state = initialState, action) => {
  switch (action.type) {
    //case MON_ACTION:
    case ADD_TASK:
      //modifs
      /*return newState. 
        On ajoute le nouveau state dans le nouvel array avec les trois "."
        On ajoute la nouvelle tâche avec l'id le title le completed
        */
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      let newState = [];

      state.forEach(task => {
        if (task.id === action.payload.id) {
          newState.push({
            ...task,
            isCompleted: !task.isCompleted,
          });
          return;
        }
        newState.push(task);
      });

      return newState;

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
};
