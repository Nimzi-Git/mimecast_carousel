import {TestBed, fakeAsync, tick, inject} from '@angular/core/testing';
import {FetchImagesService} from './fetch-images.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FetchImagesService: get one image', () => {

beforeEach(() => {
 TestBed.configureTestingModule({
   providers: [FetchImagesService],
   imports: [
    HttpClientTestingModule
   ],
 });
});

  it('should be created', inject([FetchImagesService], (service: FetchImagesService) => {
    expect(service).toBeTruthy();
  }));
it('expects service to fetch data with proper sorting',
  inject([HttpTestingController, FetchImagesService],
    (httpMock: HttpTestingController, service: FetchImagesService) => {
      service.getImagesFromApi(1).subscribe(data => {
        expect(data[0].id).toBeGreaterThan(0);
        expect(data[0].url).toContain('https');
        expect(data[0].albumId).toBeGreaterThan(0);
      });
      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
      expect(req.request.method).toEqual('GET');
    })
);

});
