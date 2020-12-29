import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteambuildingComponent } from './createteambuilding.component';

describe('CreateteambuildingComponent', () => {
  let component: CreateteambuildingComponent;
  let fixture: ComponentFixture<CreateteambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateteambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateteambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
