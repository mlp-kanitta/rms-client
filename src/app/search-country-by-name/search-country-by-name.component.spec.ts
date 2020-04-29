import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCountryByNameComponent } from './search-country-by-name.component';

describe('SearchCountryByNameComponent', () => {
  let component: SearchCountryByNameComponent;
  let fixture: ComponentFixture<SearchCountryByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCountryByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCountryByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
