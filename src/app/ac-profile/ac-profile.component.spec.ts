import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcProfileComponent } from './ac-profile.component';

describe('AcProfileComponent', () => {
  let component: AcProfileComponent;
  let fixture: ComponentFixture<AcProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
