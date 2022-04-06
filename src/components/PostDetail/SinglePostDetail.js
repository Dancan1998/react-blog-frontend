import "./singlepostdetail.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { singleBlog } from "../../actions/blogActions";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const SinglePostDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const singleBlogDetails = useSelector((state) => state.singleBlogReducer);

  const { loading, error, singleBlog: singleBlogPost } = singleBlogDetails;

  useEffect(() => {
    dispatch(singleBlog(params.id));
  }, [dispatch, params.id]);

  const {
    title,
    blog_image,
    timestamp,
    author = {},
    description,
  } = singleBlogPost;
  const { name = "" } = author;

  if (error) {
    return <Error>{error}</Error>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="singlePostDetail">
      <div className="singlePostWrapper">
        <img src={blog_image} alt={title} className="singlePostImg" />
        <h3 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <MdDelete className="singlePostIcon" />
          </div>
        </h3>
        <div className="singlePostInfo">
          <span>
            Author : <b>{name}</b>
          </span>
          <span className="singlePostDate">{moment(timestamp).calendar()}</span>
        </div>
        <div className="desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostDetail;
