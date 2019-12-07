import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccontSearchComponent } from './accont-search.component';

describe('AccontSearchComponent', () => {
  let component: AccontSearchComponent;
  let fixture: ComponentFixture<AccontSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccontSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccontSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
