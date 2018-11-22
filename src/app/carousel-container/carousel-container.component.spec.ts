import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContainerComponent } from './carousel-container.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FetchImagesService } from '../services/fetch-images.service';

describe('CarouselContainerComponent', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<CarouselContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselContainerComponent, CarouselCardComponent ],
      imports: [HttpClientModule],
      providers: [FetchImagesService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
