import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansCardPageComponent } from './mans-card-page.component';

describe('MansCardPageComponent', () => {
  let component: MansCardPageComponent;
  let fixture: ComponentFixture<MansCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MansCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
