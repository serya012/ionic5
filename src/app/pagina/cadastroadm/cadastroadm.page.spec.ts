import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroadmPage } from './cadastroadm.page';

describe('CadastroadmPage', () => {
  let component: CadastroadmPage;
  let fixture: ComponentFixture<CadastroadmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
