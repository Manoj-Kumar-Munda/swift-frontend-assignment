import SortBtn from "../components/SortBtn";
import {  useComments } from "../hooks/useComments";
import { PiCaretUpDownLight } from "react-icons/pi";
import DashboardTable from "../components/DashboardTable";
import { SortOption, sortOrderType } from "../types/comments";

type sortType = {
  sortBy: SortOption;
  order: number;
};

const Dashboard = () => {
  const { modifiedComments, isLoading, setSortBy, setSearch, search } = useComments();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(modifiedComments);
  

  return (
    <div className="max-w-screen-xl mx-auto mt-4 px-2">
      <h1 className="font-medium text-2xl">Dashboard</h1>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between flex-wrap gap-2 nd:gap-0">
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

          <div className="">
            <input
              type="text"
              value={search}
              placeholder="Search name and email"
              className="w-80 border shadow-lg outline-none px-2 py-1 rounded-md"
              onChange={(e) => setSearch(e.target.value)}

            />
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
