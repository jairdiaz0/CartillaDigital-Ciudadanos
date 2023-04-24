import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensCardPageComponent } from './childrens-card-page.component';

describe('ChildrensCardPageComponent', () => {
  let component: ChildrensCardPageComponent;
  let fixture: ComponentFixture<ChildrensCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrensCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
