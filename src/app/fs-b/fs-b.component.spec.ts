import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsBComponent } from './fs-b.component';

describe('FsBComponent', () => {
  let component: FsBComponent;
  let fixture: ComponentFixture<FsBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsBComponent]
    });
    fixture = TestBed.createComponent(FsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
