import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardComponent } from './carousel-card.component';
import { CarouselContainerComponent } from '../carousel-container.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FetchImagesService } from 'src/app/services/fetch-images.service';

describe('CarouselCardComponent', () => {
  let component: CarouselCardComponent;
  let fixture: ComponentFixture<CarouselCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCardComponent, CarouselContainerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCardComponent);
    component = fixture.componentInstance;
    component.imageDet = { albumId: 1,
                           id: 1,
                           title: 'abc',
                           url: 'titleUrl',
                           thumbnailUrl: 'titleThumbnail'};
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
