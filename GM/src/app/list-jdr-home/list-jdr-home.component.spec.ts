import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJdrHomeComponent } from './list-jdr-home.component';

describe('ListJdrHomeComponent', () => {
  let component: ListJdrHomeComponent;
  let fixture: ComponentFixture<ListJdrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJdrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJdrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
