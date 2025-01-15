import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from './recipe-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A taste Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2023/06/24/09/17/iguana-8084900_1280.jpg'),
  ];
  log() {
    console.log(this.recipes);

  }
}
