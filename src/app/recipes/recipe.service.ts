import {RecipeModel} from "./model/recipe/recipe.model";
import { Injectable} from "@angular/core";
import {IngredientModel} from "../shared/modules/ingredient/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<RecipeModel[]>()

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     "Big Burger",
  //     'Just divine',
  //     'https://exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&resize=680,453',
  //     [
  //       new IngredientModel('Meet blend', 1),
  //       new IngredientModel('Good cheese', 3),
  //       new IngredientModel('Salad', 1),
  //       new IngredientModel('Buns', 1 )
  //     ]),
  //   new RecipeModel(
  //     "Margherita not Vegan Pizza",
  //     'Not exactly Margherita, but still divine',
  //     'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/07/10/1533441312-shutterstock378226756.jpg',
  //     [
  //       new IngredientModel('Mozzarella cheese', 100),
  //       new IngredientModel('Cherry tomatoes', 10),
  //       new IngredientModel('Basil', 10),
  //       new IngredientModel('Olive', 6),
  //       new IngredientModel('Ham', 50)
  //     ])
  // ];

  private recipes: RecipeModel[] = new Array<RecipeModel>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
