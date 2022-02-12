import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreeDotsPipe } from './pipes/three-dots.pipe';
import { SearchPhotosComponent } from './components/search-photos/search-photos.component';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchAlbumsComponent } from './search-albums/search-albums.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailsComponent,
    PhotosListComponent,
    MainComponent,
    ThreeDotsPipe,
    SearchPhotosComponent,
    SearchAlbumsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
