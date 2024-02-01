import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrcamentodPage } from './orcamentod.page';

describe('OrcamentodPage', () => {
  let component: OrcamentodPage;
  let fixture: ComponentFixture<OrcamentodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrcamentodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
