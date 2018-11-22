import { Component, Input } from '@angular/core';
import { Images } from '../../services/fetch-images.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent {
  @Input() imageDet: Images;
}
