import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1 : HTMLElement;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers:[
        {provide: ComponentFixtureAutoDetect, useValue:true}
      ]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1')
  });

  xit('should display original title', () => {
    expect(h1.textContent).toContain(component.title);
  });

  xit('should still see original title after component title change',()=>{
    const oldTitle = component.title;
    component.title = 'Test Title';
    expect(h1.textContent).toContain(oldTitle);
  });
  it('should display  updated title after detectChanges',()=>{
    component.title = 'Test Title';
    fixture.detectChanges();//detect changes explicity
    expect(h1.textContent).toContain(component.title);
  })
});
