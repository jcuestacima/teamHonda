import { Component } from "@angular/core";

@Component({
  selector: 'app-heroes-list',
  templateUrl:'./herolist.component.html',
  styleUrl: './herolist.component.css'
})
export class HeroListComponent{
  public coches: string[] = ['Lexus', 'Honda', 'Toyota', 'Subaru', 'Mitsubishi'];
  deletedcar:string |undefined="";

  deletelastcar():void{
     this.deletedcar = this.coches.pop();
  }
}
