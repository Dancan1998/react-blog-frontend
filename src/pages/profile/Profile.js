import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <FaUser className="settingsPPIcon" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Safak"
            name="name"
            className="removeBoarder"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="safak@gmail.com"
            name="email"
            className="removeBoarder"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="removeBoarder"
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Profile;
