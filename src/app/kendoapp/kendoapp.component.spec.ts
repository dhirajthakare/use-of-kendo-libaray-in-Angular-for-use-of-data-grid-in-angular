import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoappComponent } from './kendoapp.component';

describe('KendoappComponent', () => {
  let component: KendoappComponent;
  let fixture: ComponentFixture<KendoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
