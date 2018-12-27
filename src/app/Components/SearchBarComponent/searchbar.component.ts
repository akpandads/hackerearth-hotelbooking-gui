import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../Services/HotelService/hotel.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  hotelNameInput: String;
  hotelService: HotelService;
  constructor() {
    this.hotelNameInput = '';
    this.hotelService = new HotelService();
  }

  ngOnInit() {
  }
  public seacrhHotelByName() {
    console.log('Inside Method' + this.hotelNameInput);
    console.log(this.hotelService.searchHotelByName(this.hotelNameInput));

  }
  public getAllHotels() {
    console.log('inside get All Hotels');
  }
}
