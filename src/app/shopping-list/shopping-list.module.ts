import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";

import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule{ }
