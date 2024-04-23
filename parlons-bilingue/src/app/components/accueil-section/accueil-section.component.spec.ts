import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSectionComponent } from './accueil-section.component';

describe('AccueilSectionComponent', () => {
  let component: AccueilSectionComponent;
  let fixture: ComponentFixture<AccueilSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
