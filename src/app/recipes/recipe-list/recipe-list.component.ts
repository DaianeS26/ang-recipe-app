import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 
    'https://f4d5s4a5.stackpathcdn.com/wp-content/uploads/2018/10/Easy-Black-Bean-Brownies-Oil-Gluten-free-Sweet-Simple-Vegan-8.jpg'),
    new Recipe('Test Recipe2', 'This is a test2', 
    'https://f4d5s4a5.stackpathcdn.com/wp-content/uploads/2018/10/Easy-Black-Bean-Brownies-Oil-Gluten-free-Sweet-Simple-Vegan-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
