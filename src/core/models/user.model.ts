export default interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
interface IGeo {
  lat: number;
  lng: number;
}
