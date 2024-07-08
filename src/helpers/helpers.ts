import { IComment } from "../types/comments";
import { IAddress } from "../types/user";

interface ISort {
  sortBy: string;
  order: string;
}

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

  if (searchText === "") {
    return data;
  }

  let res;
  if (searchByName.length > 0) {
    res = searchByName;
  } else if (searchByEmail.length > 0) {
    res = searchByEmail;
  } else {
    return [];
  }

  return res;
};

export const sort = (comments: IComment[], sortProp: ISort) => {
  const arr = [...comments];
  if (!sortProp.sortBy || !sortProp.order) {
    console.log(sortProp.sortBy + " " + sortProp.order);
    return;
  }

  if (sortProp.sortBy === "postId") {
    if (sortProp.order === "asc") {
      return arr.sort((a, b) => a.postId - b.postId);
    }
    if (sortProp.order === "desc") {
      return arr.sort((a, b) => b.postId - a.postId);
    }
  }

  if (sortProp.sortBy === "name") {
    if (sortProp.order === "asc") {
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortProp.order === "desc") {
      return arr.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  if (sortProp.sortBy === "email") {
    if (sortProp.order === "asc") {
      return arr.sort((a, b) => a.email.localeCompare(b.email));
    }
    if (sortProp.order === "desc") {
      return arr.sort((a, b) => b.email.localeCompare(a.email));
    }
  }
};
