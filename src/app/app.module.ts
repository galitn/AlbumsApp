import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailsComponent,
    PhotosListComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
