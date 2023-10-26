import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosLogComponent } from './usuarios-log.component';

describe('UsuariosLogComponent', () => {
  let component: UsuariosLogComponent;
  let fixture: ComponentFixture<UsuariosLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosLogComponent]
    });
    fixture = TestBed.createComponent(UsuariosLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
