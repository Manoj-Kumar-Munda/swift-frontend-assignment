import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Avatar from "./Avatar";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    setUser();
  }
  return (
    <header className="header">
      <h1 className="logo-text">Swift</h1>

      <nav className="nav">
        {user && (
          <div className="user__info">
            <Avatar name={user?.name} size="base" bgColor="#fff" />
            <span className="username">{user.name.split(" ")[0]}</span>
          </div>
        )}

        <span>
          <Link className="nav-link" to={"/dashboard"}>
            Dashboard
          </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
