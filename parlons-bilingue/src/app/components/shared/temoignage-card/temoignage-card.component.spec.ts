import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageCardComponent } from './temoignage-card.component';

describe('TemoignageCardComponent', () => {
  let component: TemoignageCardComponent;
  let fixture: ComponentFixture<TemoignageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemoignageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemoignageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
