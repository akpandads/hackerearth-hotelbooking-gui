import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

const hotelServiceUrl = environment.hotelEndPointUrl;
@Injectable()
export class HotelService {
  searchByNameUrl: string;
  searchAllUrl: string;

  constructor(public http: HttpClient) {
    this.searchAllUrl=hotelServiceUrl+"/hotels";
    this.searchByNameUrl = hotelServiceUrl + "/hotel/";
  }

  public searchHotelByName(hotelName: String) {
    console.log("calling service method");
    return this.http.get<HotelModel[]>(this.searchByNameUrl+hotelName);
  }

  public searchAllHotels(){
    console.log("Inside search All Hotels method");
    return this.http.get<HotelModel[]>(this.searchAllUrl);
  }

}
