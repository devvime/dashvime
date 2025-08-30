import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordStep } from './forgot-password-step';

describe('ForgotPasswordStep', () => {
  let component: ForgotPasswordStep;
  let fixture: ComponentFixture<ForgotPasswordStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordStep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
