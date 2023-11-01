import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlacesComponent } from './live-places.component';

describe('LivePlacesComponent', () => {
  let component: LivePlacesComponent;
  let fixture: ComponentFixture<LivePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
