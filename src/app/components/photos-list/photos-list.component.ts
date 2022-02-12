import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { photo } from 'src/app/models/photo.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  albumID: number = 1;
  photos$: Observable<photo[]> = new Observable<photo[]>();
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.photos$ =  this.albumService.loadPhotosByAlbum(this.albumID);
  }

}
