import { useEffect, useState } from "react";
import { IComment } from "../types/comments";

export const useComments = () => {
  const [comments, setComments] = useState<IComment[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      setComments(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return {
    comments,
    isLoading,
  };
};
