import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { album } from 'src/app/models/album.model';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css'],
})
export class SearchPhotosComponent implements OnInit {
   constructor() {}

  ngOnInit(): void {}

 }
