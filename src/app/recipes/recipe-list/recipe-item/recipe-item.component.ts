import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../model/recipe/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
