import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from a observable',(done:DoneFn)=>{
    service.getObservableValue().subscribe((value) =>{
        expect(value).toBe('observable value');
        done();
    });
  });
  it('#agetPromiseValue should return value  from promise',(done: DoneFn)=>{
    service.getPromiseValue().then((value)=>{
      expect(value).toBe('promise value');
      done();
    })
  })
});
