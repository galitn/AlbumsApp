import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  loadPhotosByAlbum(albumID: number = 1){
    let url = `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`
    return this.http.get<photo[]>(url);
  }
}
