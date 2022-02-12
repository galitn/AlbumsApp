import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photo } from '../models/photo.model';
import { album } from '../models/album.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  photos: photo[] = [];
  filteredPhotos$: BehaviorSubject<photo[]> = new BehaviorSubject<photo[]>([]);
  constructor(private http: HttpClient) {}

  loadPhotosByAlbum(albumID: number = 1) {
    let url = `https://jsonplaceholder.typicode.com/albums/${albumID}/photos`;
    this.http.get<photo[]>(url).subscribe((photos) => {
      this.photos = photos;
      this.filteredPhotos$.next(photos);
    });
    return this.filteredPhotos$;
  }
  searchPhotos(searchTerm: string) {
    const filteredPhotos = this.photos.filter(
      (photo) => photo.title.indexOf(searchTerm) >= 0
    );
    this.filteredPhotos$.next(filteredPhotos);
  }
  loadAlbums() {
    let url = `https://jsonplaceholder.typicode.com/albums`;
    return this.http.get<album[]>(url);
  }
}
