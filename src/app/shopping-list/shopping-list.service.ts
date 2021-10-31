import {IngredientModel} from "../shared/modules/ingredient/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientModel[]>();

  private ingredients : IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push( ...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
