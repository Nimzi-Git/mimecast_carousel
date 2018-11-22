import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Images {
 albumId: number;
 id: number;
 title: string;
 url: string;
 thumbnailUrl: string;
}

@Injectable()
export class FetchImagesService {
  private apiRoot = 'https://jsonplaceholder.typicode.com/photos';
  public appURL = `${this.apiRoot}`;
  totalImagesCount: number;
  constructor(private http: HttpClient) { }
  public getImagesFromApi(id: number): Observable<Images[]> {
    return this.http.get<Images[]>(this.appURL).pipe(
              map(image => image.filter(el => el.id === id))
            );
  }
  public totalImages(): number {
   this.http.get<Images[]>(this.appURL).subscribe(
     res => {
      this.totalImagesCount = res.length;
     }
   );
   return this.totalImagesCount;
 }
}
