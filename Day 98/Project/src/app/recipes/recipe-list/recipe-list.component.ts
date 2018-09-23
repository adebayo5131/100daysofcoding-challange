import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [

  new Recipe ('Name of recipe', 'Description of recipe',
  'https://imagesvc.timeincapp.com/v3/mm/' +
  'image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_' +
  '2x%2Fpublic%2Fimage%2F2018%2F02%2Fmain%2F2548601_qfsba_rice_with_scallops_152.jpg%3Fitok%3Dqvkz_lUq&w=700&q=85')

  new Recipe ('Name of recipe', 'Description of recipe',
  'http://dfmhubb.com/wp-content/uploads/2018/05/efo-riro-2-thegem-blog-default.jpg')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
  }

}
