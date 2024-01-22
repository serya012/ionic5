import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoPage } from './evento.page';

describe('EventoPage', () => {
  let component: EventoPage;
  let fixture: ComponentFixture<EventoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
