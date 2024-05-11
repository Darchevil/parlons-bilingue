import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStepSectionComponent } from './service-step-section.component';

describe('ServiceStepSectionComponent', () => {
  let component: ServiceStepSectionComponent;
  let fixture: ComponentFixture<ServiceStepSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceStepSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceStepSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
