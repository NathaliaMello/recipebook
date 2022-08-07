import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule{}
