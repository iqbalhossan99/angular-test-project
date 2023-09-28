import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaBComponent } from './fa-b.component';

describe('FaBComponent', () => {
  let component: FaBComponent;
  let fixture: ComponentFixture<FaBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaBComponent]
    });
    fixture = TestBed.createComponent(FaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
