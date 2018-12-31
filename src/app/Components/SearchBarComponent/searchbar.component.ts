import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../Services/HotelService/hotel.service';
import {Observable} from 'rxjs';
import {SearchResultComponent} from '../SearchResultComponent/search-result.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  hotelNameInput: String;
  searchResultComponent : SearchResultComponent;
  hotel : HotelModel []
  constructor(private hotelService:HotelService) {
    this.hotelNameInput = '';
    this.searchResultComponent= new SearchResultComponent();
  }

  ngOnInit() {
  }
  public seacrhHotelByName() {
    console.log('Inside search method : ' + this.hotelNameInput);
    this.hotelService.searchHotelByName(this.hotelNameInput).subscribe(items => {
      this.hotel= items;
      console.log("recieved hotel details with name containing :"+this.hotel[0].hotelName);
    });
    this.searchResultComponent.displayHotels(this.hotel);
  }


  public searchAllHotels() {
    console.log('inside get All Hotels');
    this.hotelService.searchAllHotels().subscribe(items => {
      this.hotel= items;
      console.log("Number of Hotels recieved"+this.hotel.length);
    });
    this.searchResultComponent.displayHotels(this.hotel);
  }
}
