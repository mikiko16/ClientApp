import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeambuildingComponent } from './teambuilding.component';

describe('TeambuildingComponent', () => {
  let component: TeambuildingComponent;
  let fixture: ComponentFixture<TeambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
