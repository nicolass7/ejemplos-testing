import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  template: ``
})
export class StoreComponent {
  public haveIceCream = false;
  public checkIceCream(): void{
    //Ejecucion de metodo asyncrono 
    setTimeout(()=>{
      this.haveIceCream = true;
    },1000);
  }

}
