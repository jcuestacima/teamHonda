import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Car } from "../../interfaces/car.interface";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'carsList',
  templateUrl:'./carsList.component.html',
  styleUrl: './carsList.component.css'
})
export class CarsListComponent{

  @Input()
  public carsList: Car[]=[
    {
      id: uuid(),
      modelo: 'Accord',
      cv:180,
      foto: ""
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCar(id?:string):void{
    //this.carsList.splice(index, 1)

    if (!id) {
      return
    }
    console.log(id);
    this.onDelete.emit(id);

  }

}
