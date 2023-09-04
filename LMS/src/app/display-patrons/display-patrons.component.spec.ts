import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPatronsComponent } from './display-patrons.component';

describe('DisplayPatronsComponent', () => {
  let component: DisplayPatronsComponent;
  let fixture: ComponentFixture<DisplayPatronsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPatronsComponent]
    });
    fixture = TestBed.createComponent(DisplayPatronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
