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
  console.log(address);
  const values = Object.values(address).slice(0, -1);
  const newAddress = values.join(",");
  console.log(newAddress);
  return newAddress;
};
