import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddclientePage } from './addcliente.page';

describe('AddclientePage', () => {
  let component: AddclientePage;
  let fixture: ComponentFixture<AddclientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
