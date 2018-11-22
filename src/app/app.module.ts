import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { FetchImagesService } from './services/fetch-images.service';
import { CarouselCardComponent } from './carousel-container/carousel-card/carousel-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarouselContainerComponent,
    CarouselCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
