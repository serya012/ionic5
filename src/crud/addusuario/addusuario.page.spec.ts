import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddusuarioPage } from './addusuario.page';

describe('AddusuarioPage', () => {
  let component: AddusuarioPage;
  let fixture: ComponentFixture<AddusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
