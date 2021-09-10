import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-basic',
  templateUrl: './components-basic.component.html',
  styleUrls: ['./components-basic.component.css']
})
export class ComponentsBasicComponent {

  public isOn = false;

  get message(){
    return `La luz esta ${this.isOn ? 'Prendida' : 'Apagada'}`;
    }

  public clicked(): void{
    this.isOn = !this.isOn;    

  }

}
