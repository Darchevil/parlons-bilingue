import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAButtonComponent } from './cta-button.component';

describe('CTAButtonComponent', () => {
  let component: CTAButtonComponent;
  let fixture: ComponentFixture<CTAButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTAButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
