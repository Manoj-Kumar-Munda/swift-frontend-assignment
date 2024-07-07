import { useEffect, useState } from "react";
import useLocalStorage from "../context/useLocalStorage";
import { IComment } from "../types/comments";
import { useSearchParams } from "react-router-dom";
interface IPagination {
  pageNumber: number;
  pageSize: number;
}

const DashboardTable = ({ comments }: { comments: IComment[] }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log( searchParams.get("page"));
  
  const [pagination, setPagination] = useLocalStorage<IPagination>(
    "pagination",
    {
      pageNumber: 1,
      pageSize: 10,
    }
  );

  const [filteredComments, setFilteredComments] = useState(comments);
  useEffect(() => {
    if (
      pagination.pageNumber <= 0
    ) {
      return;
    }

    const data = comments.slice(
      pagination.pageNumber * pagination.pageSize - pagination.pageSize,
      pagination.pageNumber * pagination.pageSize
    );

    setFilteredComments(data);
  }, [pagination, comments]);

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
              filteredComments.map((item) => (
                <tr key={item?.id} className="border">
                  <td className="py-1 text-nowrap text-center">{item?.postId}</td>
                  <td className="py-1 line-clamp-1">{item?.name}</td>
                  <td className="py-1">{item?.email}</td>
                  <td className="py-1 overflow-hidden line-clamp-1">{item?.body}</td>
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
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination((prev) => {
                return { ...prev, pageSize: +e.target.value };
              })
            }
          >
            <option value="10">10 / page</option>
            <option value="50">50 / page</option>
            <option value="100"> 100 / page</option>
          </select>
        </div>
        <div className="flex gap-2 items-center  ">
          <span className="text-xs">
            {` Showing ${pagination.pageNumber} - ${
              pagination.pageNumber * pagination.pageSize
            } of ${comments.length}`}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs">Jump to page</span>
            <input
              type="text"
              className="border w-6 text-center text-sm"
              defaultValue={1}
              value={pagination.pageNumber.toString()}
              onChange={(e) =>
                setPagination((prev) => {
                  return { ...prev, pageNumber: +e.target.value };
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
