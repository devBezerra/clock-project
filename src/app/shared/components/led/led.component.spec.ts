import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedComponent } from './led.component';

describe('LedComponent', () => {
  let component: LedComponent;
  let fixture: ComponentFixture<LedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
