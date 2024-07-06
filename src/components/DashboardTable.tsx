import { IComment } from "../hooks/useComments"


const DashboardTable = ({ comments } : { comments: IComment[]}) => {
  console.log(comments);
  
  return (
    <div className="relative overflow-x-auto">
    <table className="min-w-full">
      <thead className="">
        <tr>
          <th scope="col" className="text-start pr-3 py-2 text-nowrap">
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
          comments.map((item) => (
            <tr key={item?.id}>
              <td className="text-nowrap">{item?.postId}</td>
              <td className="line-clamp-1">{item?.name}</td>
              <td>{item?.email}</td>
              <td className="overflow-hidden line-clamp-1">
                {item?.body}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default DashboardTable