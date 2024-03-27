import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import { hondaService } from "../services/teamHonda.service";

@Component({
  selector: 'app-teamHonda-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private teamHondaService: hondaService){

  }

  get cars(): Car[]{
    return [...this.teamHondaService.cars];
  }

  onDeleteCar(id:string):void{this.teamHondaService.deleteCarByid(id)}

  onNewCar(car:Car):void{this.teamHondaService.newCar(car)}
}
