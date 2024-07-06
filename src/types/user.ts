export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }
  