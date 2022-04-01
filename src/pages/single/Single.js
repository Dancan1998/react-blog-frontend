import SinglePostDetail from "../../components/PostDetail/SinglePostDetail";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";

const Single = () => {
  return (
    <div className="singlepost">
      <SinglePostDetail />
      <Sidebar />
    </div>
  );
};

export default Single;
