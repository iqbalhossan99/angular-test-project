import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaAComponent } from './fa-a.component';

describe('FaAComponent', () => {
  let component: FaAComponent;
  let fixture: ComponentFixture<FaAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaAComponent]
    });
    fixture = TestBed.createComponent(FaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
