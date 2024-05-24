import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifElementComponent } from './tarif-element.component';

describe('TarifComponent', () => {
  let component: TarifElementComponent;
  let fixture: ComponentFixture<TarifElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarifElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
