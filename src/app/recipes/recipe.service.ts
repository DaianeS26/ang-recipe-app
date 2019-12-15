import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';




@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // recipeSelected = new Subject<Recipe>();

    // private recipes: Recipe[] = [
    //     new Recipe('Easy Hummus Recipe', 'Homemade hummus is very easy to make',
    //     'https://www.inspiredtaste.net/wp-content/uploads/2019/07/The-Best-Homemade-Hummus-Recipe-1200-768x513.jpg',
    //     [
    //         new Ingredient('chickpeas', 1),
    //         new Ingredient('tahini', 1),
    //         new Ingredient('Lemon', 2),
    //         new Ingredient('Garlic', 2)
    //     ]),
    //     new Recipe('Black Bean Brownie', 'Healthy and delicious', 
    //     'https://f4d5s4a5.stackpathcdn.com/wp-content/uploads/2018/10/Easy-Black-Bean-Brownies-Oil-Gluten-free-Sweet-Simple-Vegan-8.jpg',
    //     [
    //         new Ingredient('Black beans', 1),
    //         new Ingredient('Avocado', 1),
    //         new Ingredient('Oatmeal flour', 2),
    //         new Ingredient('Mapple Syrup', 3)
    //     ])
    //   ];

    private recipes: Recipe[] = [];

    constructor(
        private store: Store<fromApp.AppState>
    ){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        // this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
