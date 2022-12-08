import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chiken Biriyani',
      'Calicut style chiken biriyani',
      'https://live.staticflickr.com/8086/29372046950_bf222e5dac_b.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
