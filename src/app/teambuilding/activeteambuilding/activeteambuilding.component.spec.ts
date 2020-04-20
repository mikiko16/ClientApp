import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveteambuildingComponent } from './activeteambuilding.component';

describe('ActiveteambuildingComponent', () => {
  let component: ActiveteambuildingComponent;
  let fixture: ComponentFixture<ActiveteambuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveteambuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveteambuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
