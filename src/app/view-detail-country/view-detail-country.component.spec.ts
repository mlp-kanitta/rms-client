import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailCountryComponent } from './view-detail-country.component';

describe('ViewDetailCountryComponent', () => {
  let component: ViewDetailCountryComponent;
  let fixture: ComponentFixture<ViewDetailCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
