import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ThreeDotsPipe } from './pipes/three-dots.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailsComponent,
    PhotosListComponent,
    MainComponent,
    ThreeDotsPipe,
  ],
  imports: [BrowserModule, HttpClientModule, NoopAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
