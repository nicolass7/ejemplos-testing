import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EquipamientoService } from './equipamiento.service';

xdescribe('EquipamientoService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const equipamientoService : EquipamientoService = TestBed.inject(EquipamientoService);
    const dummyUsers = [{id:'1', name: 'John'}];
    equipamientoService.getEquipamiento(1);
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);

    expect(equipamientoService.users).toEqual(dummyUsers);
    expect(equipamientoService.error).toBeFalsy();
    httpTestingController.verify();
  });
  it('should set error in true',()=>{
    const emsg = 'Deliberate 404 error ';
    const equipamientoService: EquipamientoService = TestBed.inject(EquipamientoService);
    equipamientoService.getEquipamiento(1);
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush(emsg,{status:404, statusText:'Not Found'});
    expect(equipamientoService.users).toEqual([]);
    expect(equipamientoService.error).toBeTruthy();
  });
});
