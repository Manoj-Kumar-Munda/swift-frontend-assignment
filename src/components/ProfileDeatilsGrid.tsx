import { User } from "../context/UserContext";
import ProfileGridItem from "./ProfileGridItem";

const ProfileDeatilsGrid = ({ user }: { user: User }) => {
  return (
    <div className=" my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-1">
      <ProfileGridItem label="User ID" data={user.id} />
      <ProfileGridItem label="Name" data={user.name} />
      <ProfileGridItem label="Email ID" data={user.email} />
      <ProfileGridItem label="Address" data={user.address} />
      <ProfileGridItem label="Phone" data={user.phone} />
    </div>
  );
};

export default ProfileDeatilsGrid;
