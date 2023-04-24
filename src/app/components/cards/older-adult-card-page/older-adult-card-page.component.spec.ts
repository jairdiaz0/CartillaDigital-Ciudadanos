import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderAdultCardPageComponent } from './older-adult-card-page.component';

describe('OlderAdultCardPageComponent', () => {
  let component: OlderAdultCardPageComponent;
  let fixture: ComponentFixture<OlderAdultCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlderAdultCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlderAdultCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
