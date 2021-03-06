import Post from "../post/Post";
import "./posts.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list_of_blogs } from "../../actions/blogActions";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Posts = () => {
  const dispatch = useDispatch();

  const blogListResult = useSelector((state) => state.blogList);
  const { blogs, loading, error } = blogListResult;

  const { userToken = {} } = useSelector((state) => state.userLogin);
  const { access = "", refresh = "" } = userToken;

  useEffect(() => {
    if (access && refresh) {
      dispatch(list_of_blogs());
    }
  }, [dispatch, access, refresh]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <div className="posts">
      {blogs.map((blog) => {
        const { id } = blog;
        return <Post key={id} {...blog} />;
      })}
    </div>
  );
};

export default Posts;
