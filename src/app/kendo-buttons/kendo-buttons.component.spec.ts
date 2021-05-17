import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoButtonsComponent } from './kendo-buttons.component';

describe('KendoButtonsComponent', () => {
  let component: KendoButtonsComponent;
  let fixture: ComponentFixture<KendoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
