import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastteambuildingComponent } from './pastteambuilding.component';

describe('PastteambuildingComponent', () => {
  let component: PastteambuildingComponent;
  let fixture: ComponentFixture<PastteambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastteambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastteambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
