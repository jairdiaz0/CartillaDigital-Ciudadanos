import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastElementComponent } from './toast-element.component';

describe('ToastElementComponent', () => {
  let component: ToastElementComponent;
  let fixture: ComponentFixture<ToastElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
