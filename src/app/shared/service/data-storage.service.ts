import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../../recipes/recipe.service";
import {RecipeModel} from "../../recipes/model/recipe/recipe.model";
import {exhaust, exhaustMap, map, take, tap} from "rxjs/operators";
import {IngredientModel} from "../modules/ingredient/ingredient.model";
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-7ce16-default-rtdb.firebaseio.com/recipes.json',
      recipes)
      .subscribe(response => {
        console.log('response: ', response);
      });
  }

  fetchRecipes() {
    return this.http.get<RecipeModel[]>(
        'https://ng-course-recipe-book-7ce16-default-rtdb.firebaseio.com/recipes.json'
      ).pipe(
       map(recipes => {
         return recipes.map(recipe => {
           return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : new Array<IngredientModel>() }
         });
       }),
         tap(recipes => {
           this.recipeService.setRecipes(recipes);
         }));
  }
}
