import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasListagemComponent } from './vacinas-listagem.component';

describe('VacinasListagemComponent', () => {
  let component: VacinasListagemComponent;
  let fixture: ComponentFixture<VacinasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinasListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
