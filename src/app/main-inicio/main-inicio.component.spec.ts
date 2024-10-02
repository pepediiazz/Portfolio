import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInicioComponent } from './main-inicio.component';

describe('MainInicioComponent', () => {
  let component: MainInicioComponent;
  let fixture: ComponentFixture<MainInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
