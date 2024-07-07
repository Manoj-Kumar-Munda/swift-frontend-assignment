import { IComment } from "../types/comments";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
interface IPagination {
  pageNumber: number;
  pageSize: number;
}

const DashboardTable = ({ comments }: { comments: IComment[] }) => {
  const navigate = useNavigate();
  // console.log(navigate.);

  const [searchParams] = useSearchParams();
  console.log(searchParams);
  
  let pageNumber = searchParams.get("page") || "1";
  let pageSize = searchParams.get("limit") || "10";
  console.log(searchParams.get("page"));



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
            {comments &&
              comments
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
            onChange={(e) =>
              navigate(`?page=${pageNumber}&limit=${e.target.value}`)

            }
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
            {comments &&
              new Array(comments.length / +pageSize)
                .fill(0)
                .map((_, index) => (
                  <Link
                    key={index}
                    to={`?page=${index+1}&limit=${pageSize}`}
                    className="py-2 px-1"
                  >
                    {index + 1}
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
