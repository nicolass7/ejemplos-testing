import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  public getValue():string{
    return 'real value';
  }

  public getObservableValue(): Observable<string>{
    return of('observable value');
  }

  public getPromiseValue(): Promise<string>{
    return new Promise((resolve)=>{
      resolve('promise value');
    })
  }
}
