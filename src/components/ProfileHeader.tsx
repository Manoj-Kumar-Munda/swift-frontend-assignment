import { User } from "../context/UserContext";
import Avatar from "./Avatar";

const ProfileHeader = ({ user }: { user: User }) => {

  return (
    <div>
      <div className="inline-flex gap-4 items-center">
        <Avatar name={user?.name!} className="w-16 h-16 bg-gray-200 text-2xl" />
        <div className="flex flex-col">
          <span className="font-medium">{user?.name}</span>
          <span className="text-gray-400">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
