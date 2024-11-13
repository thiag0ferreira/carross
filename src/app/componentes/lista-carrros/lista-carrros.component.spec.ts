import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarrrosComponent } from './lista-carrros.component';

describe('ListaCarrrosComponent', () => {
  let component: ListaCarrrosComponent;
  let fixture: ComponentFixture<ListaCarrrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCarrrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCarrrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
