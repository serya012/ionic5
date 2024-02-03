import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoevePage } from './historicoeve.page';

describe('HistoricoevePage', () => {
  let component: HistoricoevePage;
  let fixture: ComponentFixture<HistoricoevePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoricoevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
