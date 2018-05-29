import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJdrComponent } from './detail-jdr.component';

describe('DetailJdrComponent', () => {
  let component: DetailJdrComponent;
  let fixture: ComponentFixture<DetailJdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
