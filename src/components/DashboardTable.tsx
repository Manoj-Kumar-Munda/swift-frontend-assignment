import { useEffect, useState } from "react";
import { IComment } from "../types/comments";
import { useSearchParams } from "react-router-dom";
import { sort } from "../helpers/helpers";

const DashboardTable = ({ comments }: { comments: IComment[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredComments, setFilteredComments] = useState(comments);
  // const [pageNumber, setPageNumber] = useState("1");
  // const [pageSize, setPageSize] = useState("10");
  const [sortComments, setSortComments] = useState({
    sortBy: "",
    order: "",
  });
  const pageNumber = searchParams.get("page") || "1";
  const pageSize = searchParams.get("limit") || "10";

  useEffect(() => {
    setSortComments({
      sortBy: searchParams.get("sortBy") || "",
      order: searchParams.get("order") || "",
    });
  }, [searchParams]);

  useEffect(() => {
    const res = sort(comments, sortComments) || comments;
    setFilteredComments(res);
  }, [sortComments]);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="min-w-full rounded-lg overflow-hidden border-collapse">
          <thead className="">
            <tr className="bg-gray-500 rounded-lg text-white">
              <th scope="col" className="text-start pr-3 py-2 text-nowrap px-2">
                <span>Post ID</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Name</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Email</span>
              </th>
              <th scope="col" className="text-start pr-3 py-2">
                <span>Comment</span>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredComments &&
              filteredComments
                .slice((+pageNumber - 1) * +pageSize, +pageNumber * +pageSize)
                .map((item) => (
                  <tr key={item?.id} className="border">
                    <td className="py-1 text-nowrap text-center">
                      {item?.postId}
                    </td>
                    <td className="py-1 line-clamp-1">{item?.name}</td>
                    <td className="py-1">{item?.email}</td>
                    <td className="py-1 overflow-hidden line-clamp-1">
                      {item?.body}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end gap-2  my-4">
        <div className="">
          <select
            className="border rounded-md text-sm p-1"
            name="pageSize"
            id="pageSize"
            value={+pageSize}
            onChange={(e) => {
              searchParams.set("limit", `${e.target.value}`);
              setSearchParams(searchParams);
            }}
          >
            <option value="10">10 / page</option>
            <option value="50">50 / page</option>
            <option value="100"> 100 / page</option>
          </select>
        </div>
        <div className="flex gap-2 items-center  ">
          <span className="text-xs">
            {` Showing ${+pageNumber} - ${+pageNumber * +pageSize} of ${
              comments.length
            }`}
          </span>

          <div className="flex">
            {filteredComments &&
              new Array(filteredComments.length / +pageSize)
                .fill(0)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      searchParams.set("page", `${index + 1}`);
                      setSearchParams(searchParams);
                    }}
                    className="py-2 px-1"
                  >
                    {index + 1}
                  </button>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
