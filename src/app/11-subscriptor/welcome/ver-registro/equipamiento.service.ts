import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  public users = [] as any;
  public error = false;
  private url= 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getEquipamiento(id: any): Observable<any>{
    return this.http.get(this.url);

  }
}
