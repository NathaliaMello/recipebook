import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {RecipeModel} from "./model/recipe/recipe.model";
import {DataStorageService} from "../shared/service/data-storage.service";
import {RecipeService} from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<RecipeModel[]>{

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
