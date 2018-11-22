import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchImagesService } from './services/fetch-images.service';
import { CarouselCardComponent } from './carousel-container/carousel-card/carousel-card.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CarouselContainerComponent, CarouselCardComponent
      ],
      imports: [ HttpClientModule],
      providers: [FetchImagesService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
