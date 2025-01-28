import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPointsComponent } from './two-points.component';

describe('TwoPointsComponent', () => {
  let component: TwoPointsComponent;
  let fixture: ComponentFixture<TwoPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
