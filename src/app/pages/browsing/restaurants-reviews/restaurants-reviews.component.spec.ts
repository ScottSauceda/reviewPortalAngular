import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsReviewsComponent } from './restaurants-reviews.component';

describe('RestaurantsReviewsComponent', () => {
  let component: RestaurantsReviewsComponent;
  let fixture: ComponentFixture<RestaurantsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
