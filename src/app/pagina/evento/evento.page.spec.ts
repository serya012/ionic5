import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventoPage } from './evento.page'; //o que esta errado?
import { EventoModule } from './evento.module'; // importa o módulo correto

describe('EventoPage', () => {
  let component: EventoPage;
  let fixture: ComponentFixture<EventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventoModule], // adiciona o módulo correto
    }).compileComponents();

    fixture = TestBed.createComponent(EventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});