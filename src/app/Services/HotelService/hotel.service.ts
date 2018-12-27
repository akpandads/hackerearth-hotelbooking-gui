import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  public searchHotelByName(hotelName: String){
    return 'This is called';
  }
}
