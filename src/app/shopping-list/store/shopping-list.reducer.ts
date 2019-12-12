
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 15)
      ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient){
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT: 
            return {
                //spread operator copy the state before adding new one
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload
                ]
            };
        default:
            return state;
    }
};