import { Component, EventEmitter, Output } from "@angular/core";
import { Car } from "../../interfaces/car.interface";

@Component({
  selector: 'teamHonda-addCar',
  templateUrl:'./addCar.component.html',
  styleUrl: './addCar.component.css'
})
export class AddCarComponent{

  @Output()
  public onNewCar: EventEmitter<Car> = new EventEmitter();

  public car: Car={
    modelo:"",
    cv: 0,
    foto:""
  }

  addCar():void{

    if (this.car.modelo.length===0 || this.car.cv ===0) return;

    this.onNewCar.emit(this.car);

    this.car ={modelo:"", cv: 0, foto: ""};
  }
}
