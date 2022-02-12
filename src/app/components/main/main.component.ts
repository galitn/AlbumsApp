import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { album } from 'src/app/models/album.model';
import { photo } from 'src/app/models/photo.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  albumID: number = 1;
  photos$: Observable<photo[]> = new Observable<photo[]>();
  albums$: Observable<album[]> = new Observable<album[]>();
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums$ = this.albumService.loadAlbums();
    this.photos$ = this.albumService.loadPhotosByAlbum(this.albumID);
  }

  onSelectedAlbumChanged(selectedAlbum: number) {
    this.albumID = selectedAlbum;
    this.photos$ = this.albumService.loadPhotosByAlbum(this.albumID);
  }
}
