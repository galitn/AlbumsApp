import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  isLoading: boolean = false;
  photos: photo[] = [];
  filteredPhotos: photo[] = [];
  albums$: Observable<album[]> = new Observable<album[]>();
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.albums$ = this.albumService.loadAlbums();
    this.loadPhotosByAlbum(this.albumID);
   
  }

  onSelectedAlbumChanged(selectedAlbum: number) {
    this.isLoading = true;
    this.albumID = selectedAlbum;
    this.loadPhotosByAlbum(this.albumID);
    this.isLoading = false;
  }
  oneSearchTermChanged(searchTerm: string){
    this.albumService.searchPhotos(searchTerm);
  }
  loadPhotosByAlbum(albumID: number){
    this.albumService.loadPhotosByAlbum(albumID).subscribe((photos) => {
      this.photos  = photos;
      this.isLoading = false;
    });
  }
}
