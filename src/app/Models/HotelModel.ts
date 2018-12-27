class HotelModel {
  hotel_id: Number;
  address: String;
  categories: String;
  city: String;
  country: String;
  latitude: Number;
  longitude: Number;
  name: String;
  pincode: Number;
  province: String;
  rating: Number;
  reviews_text: String;
  reviews_title: String;
  reviews_username: String;

  constructor(  hotel_id: Number, address: String, categories: String, city: String, country: String, latitude: Number, longitude: Number, name: String, pincode: Number, province: String, rating: Number, reviews_text: String, reviews_title: String, reviews_username: String) {
    this.hotel_id = hotel_id;
    this.address = address;
    this.categories = categories;
    this.city = city;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
    this.pincode = pincode;
    this.province = province
    this.rating = rating;
    this.reviews_text = reviews_text;
    this.reviews_title = reviews_title;
    this.reviews_username = reviews_username;


  }

}
