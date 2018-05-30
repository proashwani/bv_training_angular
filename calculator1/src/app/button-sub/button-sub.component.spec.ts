import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubComponent } from './button-sub.component';

describe('ButtonSubComponent', () => {
  let component: ButtonSubComponent;
  let fixture: ComponentFixture<ButtonSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
