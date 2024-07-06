export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  export const sortOrderType: string[] = ["none", "asc", "desc"];
export type SortOption = "name" | "postId" | "email";