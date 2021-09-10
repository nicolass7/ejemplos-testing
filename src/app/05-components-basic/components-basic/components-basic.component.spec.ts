import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBasicComponent } from './components-basic.component';

describe('ComponentsBasicComponent', () => {
  let component: ComponentsBasicComponent;
  let fixture: ComponentFixture<ComponentsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });

  it('#clicked() should set #message to "is on"',()=>{
    expect(component.message).toMatch(/Apagada/i);
    component.clicked();
    expect(component.message).toMatch(/Prendid/i);
  });
});
