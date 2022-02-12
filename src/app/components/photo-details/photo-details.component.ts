import { Component, Input, OnInit } from '@angular/core';
import { photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
@Input() photo: photo;
@Input() showAlbumID: boolean;
@Input() width: string =  '270px';
  constructor() { }

  ngOnInit(): void {
  }

}
