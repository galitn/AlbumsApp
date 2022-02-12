import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photo } from '../models/photo.model';
import { album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  loadPhotosByAlbum(albumID: number = 1){
    let url = `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`
    return this.http.get<photo[]>(url);
  }

  loadAlbums(){
    let url = `https://jsonplaceholder.typicode.com/albums`
    return this.http.get<album[]>(url);
  }
}
