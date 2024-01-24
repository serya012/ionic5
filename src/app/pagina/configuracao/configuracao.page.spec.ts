import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ConfiguracaoPage } from './configuracao.page';

describe('ConfiguracaoPage', () => {
  let component: ConfiguracaoPage;
  let fixture: ComponentFixture<ConfiguracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracaoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ConfiguracaoPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
