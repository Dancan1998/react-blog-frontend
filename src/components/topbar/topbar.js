import "./topbar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
} from "react-icons/fa";

const TopBar = () => {
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
          <li className="topListItem">home</li>
          <li className="topListItem">about</li>
          <li className="topListItem">contact</li>
          <li className="topListItem">write</li>
          <li className="topListItem">logout</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/2325612/pexels-photo-2325612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <FaSearch className="searchIcon" />
      </div>
    </nav>
  );
};

export default TopBar;
