import { useEffect } from "react";
import SortBtn from "../components/SortBtn";
import { useComments } from "../hooks/useComments";
import { PiCaretUpDownLight } from "react-icons/pi";
import useLocalStorage from "../context/useLocalStorage";
import DashboardTable from "../components/DashboardTable";

export const sortOrderType: string[] = ["none", "asc", "desc"];
export type SortOption = "name" | "postId" | "email";

type sortType = {
  sortBy: SortOption;
  order: number;
};

const Dashboard = () => {
  const { modifiedComments, isLoading, setSortBy } = useComments();


  console.log(modifiedComments);
  

  // const [sortBy, setSortBy] = useLocalStorage<sortType>("sortBy", {
  //   sortBy: "name",
  //   order: 0,
  // });

  // useEffect(() => {
  //   console.log("sort");
    
  //   if (comments) {
  //     sortComments(comments, sortBy?.sortBy, sortOrderType[sortBy?.order]);
  //   }
  // }, [sortBy]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log(sortBy);

  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <h1 className="font-medium text-2xl">Dashboard</h1>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <SortBtn
              onClick={() => {
                setSortBy((prev: sortType) => {
                  if (prev.sortBy !== "postId") {
                    return { sortBy: "postId", order: 0 };
                  }
                  if (prev.order < sortOrderType.length - 1) {
                    return { sortBy: "postId", order: prev.order + 1 };
                  } else return { ...prev, order: 0 };
                });
              }}
            >
              <span>Sort Post ID</span>
              <PiCaretUpDownLight />
            </SortBtn>

            <SortBtn
              onClick={() => {
                setSortBy((prev: sortType) => {
                  if (prev.sortBy !== "name") {
                    return { sortBy: "name", order: 0 };
                  }
                  if (prev.order < sortOrderType.length - 1) {
                    return { sortBy: "name", order: prev.order + 1 };
                  } else return { ...prev, order: 0 };
                });
              }}
            >
              <span>Sort Name</span>
              <PiCaretUpDownLight />
            </SortBtn>

            <SortBtn
              onClick={() => {
                setSortBy((prev: sortType) => {
                  if (prev.sortBy !== "email") {
                    return { sortBy: "email", order: 0 };
                  }
                  if (prev.order < sortOrderType.length - 1) {
                    return { sortBy: "email", order: prev.order + 1 };
                  } else return { ...prev, order: 0 };
                });
              }}
            >
              <span>Sort Email</span>
              <PiCaretUpDownLight />
            </SortBtn>
          </div>
        </div>

        {/* Table */}
        {modifiedComments && <DashboardTable comments={modifiedComments} />}

        {/* End */}
      </div>
    </div>
  );
};

export default Dashboard;
