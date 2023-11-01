import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPlaceComponent } from './specific-place.component';

describe('SpecificPlaceComponent', () => {
  let component: SpecificPlaceComponent;
  let fixture: ComponentFixture<SpecificPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
