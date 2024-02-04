import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddfeedbackPage } from './addfeedback.page';

describe('AddfeedbackPage', () => {
  let component: AddfeedbackPage;
  let fixture: ComponentFixture<AddfeedbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddfeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
