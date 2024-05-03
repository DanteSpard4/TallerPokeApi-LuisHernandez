import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonVPage } from './pokemon-v.page';

describe('PokemonVPage', () => {
  let component: PokemonVPage;
  let fixture: ComponentFixture<PokemonVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
