import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinaListagemComponent } from './vacinas-listagem.component';



describe('VacinaListagemComponent', () => {
  let component: VacinaListagemComponent;
  let fixture: ComponentFixture<VacinaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacinaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
