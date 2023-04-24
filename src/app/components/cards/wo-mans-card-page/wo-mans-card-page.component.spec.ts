import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoMansCardPageComponent } from './wo-mans-card-page.component';

describe('WoMansCardPageComponent', () => {
  let component: WoMansCardPageComponent;
  let fixture: ComponentFixture<WoMansCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoMansCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoMansCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
