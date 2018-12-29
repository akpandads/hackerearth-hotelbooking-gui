import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../Services/HotelService/hotel.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  hotelNameInput: String;
  hotel : Observable<HotelModel[]>
  constructor(private hotelService:HotelService) {
    this.hotelNameInput = '';
  }

  ngOnInit() {
  }
  public seacrhHotelByName() {
    console.log('Inside search method : ' + this.hotelNameInput);
    this.hotel=this.hotelService.searchHotelByName(this.hotelNameInput);
    console.log('hotel value :'+this.hotel);
  }


  public getAllHotels() {
    console.log('inside get All Hotels');
  }
}
