import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./pages/main-page.component";
import { CarsListComponent } from "./components/carsList/carsList.component";
import { AddCarComponent } from "./components/addCar/addCar.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    MainPageComponent,
    CarsListComponent,
    AddCarComponent
   ],
  exports:[
    MainPageComponent
  ],

  imports:[
    CommonModule,
    FormsModule
  ]
})
export class TeamHondaModule{}
