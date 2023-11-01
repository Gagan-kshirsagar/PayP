import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutPlaceComponent } from './more-about-place.component';

describe('MoreAboutPlaceComponent', () => {
  let component: MoreAboutPlaceComponent;
  let fixture: ComponentFixture<MoreAboutPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAboutPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
