import { useContext, useEffect } from "react";

import { UserContext } from "../context/UserContext";
import Avatar from "../components/Avatar";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    setUser();
    return <h1>Loading...</h1>;
  }

  useEffect(() => {}, [user]);

  return (
    <div className="profile__container">
      <h2 className="username">Welcome, {user?.name}</h2>

      <div className="profile__box">
        <div className="user__info">
          <Avatar name={user?.name!} size="lg" bgColor="#ddd" />
          <div className="personal__details">
            <span>{user?.name}</span>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
