import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteambuildingComponent } from './viewteambuilding.component';

describe('ViewteambuildingComponent', () => {
  let component: ViewteambuildingComponent;
  let fixture: ComponentFixture<ViewteambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewteambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewteambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
