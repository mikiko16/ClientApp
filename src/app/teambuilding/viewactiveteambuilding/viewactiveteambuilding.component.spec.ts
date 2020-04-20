import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewactiveteambuildingComponent } from './viewactiveteambuilding.component';

describe('ViewactiveteambuildingComponent', () => {
  let component: ViewactiveteambuildingComponent;
  let fixture: ComponentFixture<ViewactiveteambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewactiveteambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewactiveteambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
