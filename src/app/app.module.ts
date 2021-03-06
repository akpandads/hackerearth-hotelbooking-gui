import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './Components/SearchBarComponent/searchbar.component';
import { HeaderComponent } from './Components/HeaderComponent/header.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {HotelService} from './Services/HotelService/hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent],

})
export class AppModule { }
