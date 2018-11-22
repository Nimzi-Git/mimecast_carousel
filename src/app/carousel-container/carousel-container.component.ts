import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FetchImagesService, Images } from '../services/fetch-images.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.css']
})
export class CarouselContainerComponent implements OnInit {
 @ViewChild('scrollDrawer') scrollContainer: ElementRef;
 public screenWidth = 0;
 public mobile = false;
 public listOfImages: Images[];
 public listOfTempImages: Images[];
 public listOfTempImagesObs: Observable<Images[]>;
 public imageId = 1;
 public totalImages = 0;
 public loading = true;
 public nextImage: Observable<Images[]>;
 public nextImageThumbnail: string;
 public scrollWindowContainer: HTMLElement;

  constructor(private cdRf: ChangeDetectorRef,
              private imageSvc: FetchImagesService) { }

  ngOnInit() {

   this.listOfTempImagesObs = this.fetchImages(this.imageId);
   this.totalImages = this.imageSvc.totalImages();
  }

  public getAllImages() {
  }
  public slideLeft() {
   this.scrollWindowContainer = <HTMLElement> this.scrollContainer.nativeElement;
    this.scrollWindowContainer.scrollBy(300, 0);
    this.imageId = this.imageId + 1;
    this.listOfTempImagesObs = this.fetchImages(this.imageId);
  }
  public slideRight() {
   this.scrollWindowContainer = <HTMLElement> this.scrollContainer.nativeElement;
   this.scrollWindowContainer.scrollBy(-300, 0);
   this.imageId = this.imageId - 1;
   this.listOfTempImagesObs = this.fetchImages(this.imageId);
 }

 public fetchImages(id: number): Observable<Images[]> {
  this.loading = true;
  return this.imageSvc.getImagesFromApi(id).pipe(
   tap( _ => (this.loading = false))
   );
 }
}
