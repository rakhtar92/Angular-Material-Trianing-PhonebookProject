export class Contacts {
  public _name: string;
  public _number: string;
  public _email: string;
  public _address:String
  // public _street: string;
  // public _country: string;
  // public _state: string;
  // public _city: string;
  // public _postalCode: string;
  public _organisation: string;
  public _designation: string;
  public _isFavourite: boolean;
  public _birthday: string;
  public _latitude:number;
  public _longitude:number;

  constructor(name: string, number: string, email: string,address:string, organisation: string, designation: string, isfav: boolean, birthday: string, latitude:number, longitude:number) {
    this._name = name;
    this._number = number;
    this._email = email;
    this._address = address;
    // this._street = street;
    // this._city = city;
    // this._country = country;
    // this._state = state;
    this._organisation = organisation;
    this._designation = designation;
    // this._postalCode = postalCde;
    this._birthday = birthday;
    this._isFavourite = isfav;
    this._latitude = latitude;
    this._longitude = longitude;
  }
}