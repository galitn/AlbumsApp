import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { album } from 'src/app/models/album.model';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['./search-albums.component.css']
})
export class SearchAlbumsComponent implements OnInit {

  selectedAlbum = 1;
  @Input() albums$: Observable<album[]> = new Observable<album[]>();
  @Output() selectedAlbumChanged: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onSelectedAlbumChanged(event: any) {
   this.selectedAlbum = event.value;
   this.selectedAlbumChanged.emit(this.selectedAlbum);
  }
}

