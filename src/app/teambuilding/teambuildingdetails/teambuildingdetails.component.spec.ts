import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuildingdetailsComponent } from './teambuildingdetails.component';

describe('TeambuildingdetailsComponent', () => {
  let component: TeambuildingdetailsComponent;
  let fixture: ComponentFixture<TeambuildingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuildingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuildingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
