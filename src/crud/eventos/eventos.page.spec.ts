import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosPage } from './eventos.page';

describe('EventosPage', () => {
  let component: EventosPage;
  let fixture: ComponentFixture<EventosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
