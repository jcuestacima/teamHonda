import { Component } from "@angular/core";

@Component({
  selector: 'app-heroes-hero',
  templateUrl:'./hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{
  nombre: string = 'Bruce Wayne';
  age: number= 37;

  public get capital() : string {
    return this.nombre.toUpperCase();
  }


  public getheroDescription() : string {
    return `${this.nombre} - ${this.age}`;
  }

  changeHero() : string {
    this.nombre = 'El pepe';
    return this.nombre;
  }

  changeAge() : number{
      this.age = 15;
      return this.age;
  }

  /**
   * resetForm
 : void  */
  resetForm(): void {
    this.nombre="Bruce Wayne"
    this.age = 37;

    //document.querySelector('h1')!.innerHTML = '<h1>Desde angular</h1>';
  }
}
