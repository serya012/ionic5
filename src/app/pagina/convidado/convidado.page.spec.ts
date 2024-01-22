import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvidadoPage } from './convidado.page';

describe('ConvidadoPage', () => {
  let component: ConvidadoPage;
  let fixture: ComponentFixture<ConvidadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
