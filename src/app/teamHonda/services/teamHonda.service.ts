import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car.interface';
import { v4 as uuid } from "uuid";



@Injectable({providedIn: 'root'})
export class hondaService {
  public cars: Car[]=[
    {
      id:uuid(),
      modelo: 'Civic',
      cv: 240,
      foto:"https://www.showoffimports.nl/images/cache/a4be986d8e06b67a39b0dc43433694f0.jpg"
    },
    {
      id:uuid(),
      modelo: 'NSX',
      cv: 280,
      foto:"https://global.discourse-cdn.com/forza/optimized/3X/c/4/c4e3d24ab48eef5aba1c2900071db861b23b280b_2_876x474.jpeg"
    },
    {
      id:uuid(),
      modelo: 'Integra',
      cv: 200,
      foto:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/honda-acura-integra-type-r-2782037.jpg?tf=640x"
    },
    {
      id:uuid(),
      modelo: 'RSX',
      cv: 220,
      foto:"https://i.pinimg.com/564x/df/33/75/df33756c8872f82a55f44ff6c0429486.jpg"
    },
  ];

  newCar(car: Car):void{

    const newCar: Car = {id:uuid(), ... car}

    this.cars.push(newCar);
    console.log(newCar);
  }

  deleteCarByid(id:string):void{
    //this.carsList.splice(index, 1)

    this.cars = this.cars.filter(car=> car.id !==id);

  }

}
