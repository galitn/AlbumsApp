import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css'],
})
export class SearchPhotosComponent implements OnInit {
  search: any;
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onSearchChange(event: any) {
    this.searchTermChanged.emit(event.target.value);
  }
}
