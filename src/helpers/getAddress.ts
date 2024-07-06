interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export const getAddress = (address: IAddress) => {
  const values = Object.values(address).slice(0, -1);
  const newAddress = values.join(",");
  return newAddress;
};
