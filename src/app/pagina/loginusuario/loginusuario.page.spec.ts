import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginusuarioPage } from './loginusuario.page';

describe('LoginusuarioPage', () => {
  let component: LoginusuarioPage;
  let fixture: ComponentFixture<LoginusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
