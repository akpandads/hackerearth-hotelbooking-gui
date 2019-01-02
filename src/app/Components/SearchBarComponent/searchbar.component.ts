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
  displayHotel :boolean;
  hotels : HotelModel []
  constructor(private hotelService:HotelService) {
    this.hotelNameInput = '';
    this.displayHotel=false;
  }

  ngOnInit() {
  }
  public seacrhHotelByName() {
    console.log('Inside search method : ' + this.hotelNameInput);
    this.hotelService.searchHotelByName(this.hotelNameInput).subscribe(items => {
      this.hotels= items;
      console.log("recieved hotel details with name containing :"+this.hotels[0].hotelName);
      this.displayHotel=true;
    });
  }


  public searchAllHotels() {
    console.log('inside get All Hotels');
    this.hotelService.searchAllHotels().subscribe(items => {
      this.hotels= items;
      console.log("Number of Hotels recieved"+this.hotels.length);
      this.displayHotel=true;
    });

  }
}
