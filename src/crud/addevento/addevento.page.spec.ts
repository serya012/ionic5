import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddeventoPage } from './addevento.page';

describe('AddeventoPage', () => {
  let component: AddeventoPage;
  let fixture: ComponentFixture<AddeventoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
