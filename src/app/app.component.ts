import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController, Platform, IonRouterOutlet, IonMenu } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(IonRouterOutlet, { static: false, read: ElementRef }) routerOutlet?: ElementRef;
  @ViewChild(IonMenu, { static: false }) menu?: IonMenu;

  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Eventos', url: 'evento', icon: 'balloon' },
    { title: 'Orcamento', url: 'orcamento', icon: 'cash' },
    { title: 'Feedback', url: 'feedback', icon: 'star' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Configuracao', url: 'configuracao', icon: 'settings' },
    { title: 'Privacidade', url: 'privacidade', icon: 'lock-closed' },
  ];

  private startX: number = 0;

  constructor(private menuCtrl: MenuController, private gestureCtrl: GestureController, private platform: Platform) { }

  ngAfterViewInit() {
    if (this.routerOutlet) {
      this.initGestures();
    }
  }

  private initGestures() {
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.routerOutlet?.nativeElement,
      gestureName: 'swipe-right',
      threshold: 10,
      onStart: ev => {
        this.onSwipeStart(ev);
      },
      onMove: ev => {
        this.onSwipeMove(ev);
      },
      onEnd: ev => {
        this.onSwipeEnd(ev);
      },
    });
    gesture.enable(true);
  }

  private onSwipeStart(ev: any) {
    this.startX = ev.startX;
  }

  private onSwipeMove(ev: any) {
    const delta = ev.deltaX;
    const menuSide = this.menu?.side || 'start';
    const content = this.routerOutlet?.nativeElement.swipeGesture?.getSlidingRatio();

    // Ajuste conforme necessário
    if (
      (delta > 0 && menuSide === 'end' && content && content < 1) ||
      (delta < 0 && menuSide === 'start' && content && content < 1)
    ) {
      // Limita a rotação máxima para evitar sobreposição com o conteúdo
      const rotation = Math.min(Math.abs(delta / 5), 45);
      if (this.routerOutlet?.nativeElement.style) {
        this.routerOutlet.nativeElement.style.transform = `translateX(${delta}px) rotateY(${rotation}deg)`;
      }
    }
  }

  private onSwipeEnd(ev: any) {
    const deltaX = ev.deltaX;
    const menuSide = this.menu?.side || 'start';

    // Ajuste conforme necessário
    if (
      (deltaX > 100 && this.startX < 50 && menuSide === 'start') ||
      (deltaX < -100 && this.startX > window.innerWidth - 50 && menuSide === 'end')
    ) {
      this.menuCtrl.open(menuSide);
    }

    // Limpa as transformações após o gesto
    if (this.routerOutlet?.nativeElement) {
      const routerStyle = this.routerOutlet.nativeElement.style;
      if (routerStyle) {
        routerStyle.transition = 'transform 0.3s ease-out';
        routerStyle.transform = '';
        setTimeout(() => {
          routerStyle.transition = ''; // Remove a transição após a animação
        }, 300);
      }
    }
  }
}
