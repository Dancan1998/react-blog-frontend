import "./sidebar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebarTitle">about me</h3>
        <img
          src="https://images.pexels.com/photos/2703454/pexels-photo-2703454.jpeg?cs=srgb&dl=pexels-godisable-jacob-2703454.jpg&fm=jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          necessitatibus expedita fugiat cum ab perspiciatis reprehenderit earum
          impedit. Dolore, deleniti!
        </p>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarTitle">categories</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarTitle">follow us</h3>
        <div className="sidebarSocial">
          <FaFacebookSquare className="sidebarIcon" />
          <FaTwitterSquare className="sidebarIcon" />
          <FaInstagramSquare className="sidebarIcon" />
          <FaPinterestSquare className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
