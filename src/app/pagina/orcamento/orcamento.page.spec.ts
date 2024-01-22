import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrcamentoPage } from './orcamento.page';

describe('OrcamentoPage', () => {
  let component: OrcamentoPage;
  let fixture: ComponentFixture<OrcamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrcamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
