import { IComment } from "../types/comments";
import { IAddress } from "../types/user";

export const getAddress = (address: IAddress) => {
  const values = Object.values(address).slice(0, -1);
  const newAddress = values.join(",");
  return newAddress;
};

export const searchItems = (data: IComment[], searchText: string) => {

    const searchByName = data.filter((item) =>
      item?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    const searchByEmail = data.filter((item) =>
      item?.email?.toLowerCase().includes(searchText.toLowerCase())
    );
  
    let res;
    if( searchByName.length > 0){
      res = searchByName;
    } else if(searchByEmail.length > 0){
      res = searchByEmail;
    }
  
    return res;
  };


  