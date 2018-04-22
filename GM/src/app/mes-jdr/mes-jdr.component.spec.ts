import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesJdrComponent } from './mes-jdr.component';

describe('MesJdrComponent', () => {
  let component: MesJdrComponent;
  let fixture: ComponentFixture<MesJdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesJdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesJdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
