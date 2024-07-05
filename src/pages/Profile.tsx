import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDeatilsGrid from "../components/ProfileDeatilsGrid";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/arrow.png";
const Profile = () => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if(!user){
    return <h1>Error</h1>
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-4 px-2 space-y-4">
      <div className="flex gap-4 items-center">
        <Link to={"/dashboard"} title="dashboard" >
          <img src={arrowIcon} className="h-8" />
        </Link>
        <h2 className="text-xl font-medium ">Welcome, {user?.name}</h2>
      </div>

      <div className=" sm:border-4 px-2 md:px-4 py-6">
        <ProfileHeader user={user} />
        <ProfileDeatilsGrid user={user} />
      </div>
    </div>
  );
};

export default Profile;
