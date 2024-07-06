import { useEffect, useState } from "react";
import useLocalStorage from "../context/useLocalStorage";
import { IComment, SortOption, sortOrderType } from "../types/comments";
import { searchItems } from "../helpers/helpers";

type sortType = {
  sortBy: SortOption;
  order: number;
};

export const useComments = () => {
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [modifiedComments, setModifiedComments] = useState<IComment[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const sortComments = (
    data: IComment[],
    sortBy: SortOption,
    order: string
  ) => {
    if (order === "none") return !comments ? data : comments;
    const res = data.slice().sort((a, b) => {
      if (sortBy === "postId") {
        if (order === "asc") {
          return a[sortBy] - b[sortBy];
        } else {
          return b[sortBy] - a[sortBy];
        }
      } else {
        if (order === "asc") {
          return a[sortBy].localeCompare(b[sortBy]);
        } else return b[sortBy].localeCompare(a[sortBy]);
      }
    });
    return res;
  };

  const [sortBy, setSortBy] = useLocalStorage<sortType>("sortBy", {
    sortBy: "name",
    order: 0,
  });

  const [search, setSearch] = useLocalStorage<string>("search", "");

  const fetchComments = async () => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      setComments(data);
      const sortedData = sortComments(
        data,
        sortBy.sortBy,
        sortOrderType[sortBy.order]
      );
      setModifiedComments(sortedData);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (comments) {
      if (search === "") {
        setModifiedComments(comments);
        return;
      }
      const data = searchItems(comments, search) || [];

      setModifiedComments(data);
    }
  }, [search]);

  useEffect(() => {
    if (comments) {
      const data = sortComments(
        comments,
        sortBy?.sortBy,
        sortOrderType[sortBy?.order]
      );
      setModifiedComments(data);
    }
  }, [sortBy]);

  return {
    modifiedComments,
    isLoading,
    setSortBy,
    setSearch,
    search,
  };
};
