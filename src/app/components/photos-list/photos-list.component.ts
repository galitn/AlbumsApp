import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { photo } from 'src/app/models/photo.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent implements OnInit {
  @Input() photos: photo[] = [];
  isOpenDialog: boolean = false;
  selectedPhoto: photo;
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}
  onOpenDialog(photo: photo) {
    if (!this.isOpenDialog) {
      this.isOpenDialog = true;
      this.selectedPhoto = photo;
    }
  }
}
