import "./singlepostdetail.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SinglePostDetail = () => {
  return (
    <div className="singlePostDetail">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/3762941/pexels-photo-3762941.jpeg"
          alt=""
          className="singlePostImg"
        />
        <h3 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <MdDelete className="singlePostIcon" />
          </div>
        </h3>
        <div className="singlePostInfo">
          <span>
            Author : <b>Dancan Chibole</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            qui maxime et possimus, iste cum dicta iure exercitationem
            accusantium, sunt, expedita eos necessitatibus quae voluptate. Nulla
            veniam cum quisquam aliquid? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Recusandae molestias, unde quis dolore fuga
            voluptates voluptatum sequi, ipsam eaque in omnis earum ex corporis
            facilis odio ut dolorem eius, iusto nesciunt perspiciatis voluptate.
            Quis natus praesentium sint nemo, reiciendis dolorem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostDetail;
