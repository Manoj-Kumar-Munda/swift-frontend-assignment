import SortBtn from "../components/SortBtn";
import { useComments } from "../hooks/useComments";
import { PiCaretUpDownLight } from "react-icons/pi";
import DashboardTable from "../components/DashboardTable";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const { comments, isLoading } = useComments();
  const [searchParams, setSearchParams] = useSearchParams();

  const setSortParams = (sortBy: string) => {
    searchParams.delete("page");
    searchParams.set("sortBy", sortBy);
    if (searchParams.has("sortBy")) {
      if (!searchParams.get("order")) {
        searchParams.set("order", "asc");
      } else if (searchParams.get("order") === "asc") {
        searchParams.set("order", "desc");
      } else if (searchParams.get("order") === "desc") {
        searchParams.delete("order");
        searchParams.delete("sortBy");
      }
    }
    setSearchParams(searchParams);
  };

  if (isLoading || !comments) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-4 px-2">
      <h1 className="font-medium text-2xl">Dashboard</h1>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between flex-wrap gap-2 nd:gap-0">
          <div className="flex gap-2">
            <SortBtn onClick={() => setSortParams("postId")}>
              <span>Sort Post ID</span>
              <PiCaretUpDownLight />
            </SortBtn>

            <SortBtn onClick={() => setSortParams("name")}>
              <span>Sort Name</span>
              <PiCaretUpDownLight />
            </SortBtn>

            <SortBtn onClick={() => setSortParams("email")}>
              <span>Sort Email</span>
              <PiCaretUpDownLight />
            </SortBtn>
          </div>

          <div className="">
            <SearchBar />
          </div>
        </div>

        {/* Table */}
        <DashboardTable comments={comments} />

        {/* End */}
      </div>
    </div>
  );
};

export default Dashboard;
