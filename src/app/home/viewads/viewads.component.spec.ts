import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadsComponent } from './viewads.component';

describe('ViewadsComponent', () => {
  let component: ViewadsComponent;
  let fixture: ComponentFixture<ViewadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
