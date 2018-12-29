import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

const hotelServiceUrl = environment.hotelEndPointUrl;
@Injectable()
export class HotelService {
  findByNameUrl: string;

  constructor(public http: HttpClient) {
    this.findByNameUrl=hotelServiceUrl+"/hotels";
  }

  public searchHotelByName(hotelName: String) {
    console.log("calling service method");
    return this.http.get<HotelModel[]>(this.findByNameUrl);

  }

}
