import "./topbar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

const TopBar = () => {
  const dispatch = useDispatch();
  const { loggedOut, userToken } = useSelector((state) => state.userLogin);
  const { access } = userToken;
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (loggedOut) {
      navigate("/");
    }
  }, [navigate, loggedOut]);

  return (
    <nav className="top">
      <div className="topleft">
        <FaFacebookSquare className="topIcon" />
        <FaTwitterSquare className="topIcon" />
        <FaInstagramSquare className="topIcon" />
        <FaPinterestSquare className="topIcon" />
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="text-link" to="/">
              home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="text-link" to="/about">
              about
            </Link>
          </li>
          <li className="topListItem">
            <Link className="text-link" to="/contact">
              contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="text-link" to="/create">
              write
            </Link>
          </li>
          {access ? (
            <li className="topListItem" onClick={handleLogout}>
              logout
            </li>
          ) : (
            <Link className="text-link" to="/">
              login
            </Link>
          )}
        </ul>
      </div>
      <div className="topright">
        <Link to="/profile" className="text-link">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/2325612/pexels-photo-2325612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Link>
        <FaSearch className="searchIcon" />
      </div>
    </nav>
  );
};

export default TopBar;
