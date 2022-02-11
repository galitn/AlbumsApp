import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  albumID: number = 1;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.loadPhotosByAlbum(this.albumID).subscribe(album => {
      console.log(album);
    })
  }

}
