import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

import { Recipe}  from './recipe.model';
import { RecipeService } from './recipe.service';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from './store/recipe.actions';



@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(
        private recipeService: RecipeService,
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // return this.dataStorageService.fetchRecipes();
        this.store.dispatch(new RecipeActions.FetchRecipes());
        return this.actions$.pipe(
            ofType(RecipeActions.SET_RECIPES), 
            take(1)
        );
    }
}

