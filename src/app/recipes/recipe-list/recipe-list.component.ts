import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../model/recipe/recipe.model";
import { RecipeService} from "../recepi.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[];

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  constructor(private recipeService : RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
