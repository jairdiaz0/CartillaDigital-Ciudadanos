import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeensCardPageComponent } from './teens-card-page.component';

describe('TeensCardPageComponent', () => {
  let component: TeensCardPageComponent;
  let fixture: ComponentFixture<TeensCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeensCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeensCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
