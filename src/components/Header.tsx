import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Avatar from "./Avatar";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-black ">
      <div className="h-14 mx-auto max-w-screen-xl w-full flex justify-between items-center">
        <h1 className="text-green-500 font-bold text-xl">Swift</h1>

        <nav className="flex items-center gap-6">
          {user && (
            <div className="flex gap-2 items-center">
              <Avatar name={user?.name} className=""/>
              <span className="text-white">{user.name.split(" ")[0]}</span>
            </div>
          )}

          {/* <span>
            <Link className="text-white" to={"/dashboard"}>
              Dashboard
            </Link>
          </span> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
