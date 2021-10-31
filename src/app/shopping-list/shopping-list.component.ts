import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from "../shared/modules/ingredient/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientModel[];
  private ingredientsChangeSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() {
    this.ingredientsChangeSubscription.unsubscribe();
  }

}
