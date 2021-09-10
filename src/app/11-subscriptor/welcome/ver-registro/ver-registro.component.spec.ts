import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EquipamientoService } from './equipamiento.service';
import { of } from 'rxjs';
import { VerRegistroComponent } from './ver-registro.component';

describe('VerRegistroComponent', () => {
  let component: VerRegistroComponent;
  let service: EquipamientoService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [ VerRegistroComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    component = TestBed.inject(VerRegistroComponent);
    service = TestBed.inject(EquipamientoService);
  });  

  it('should call onLoad()', () => {
    const onLoadSpy = spyOn(component,'onLoad');
    component.ngOnInit();
    expect(onLoadSpy).toHaveBeenCalled();
  });

  xit('should call getEquipamiento()',()=>{
    const getEquipamientoSpy = spyOn((component as any).equipamientoService,'getEquipamiento').and.returnValue(of({name:'Juan'}));;
    component.onLoad();
    expect(getEquipamientoSpy).toHaveBeenCalled();
    expect(component.equipamiento.name).toBe('Juan');
  });

});
