import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";
import {RecipesRoutingModule} from "./recipes-routing.module";

import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule { }
