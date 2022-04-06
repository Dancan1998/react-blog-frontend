import "./post.css";
import moment from "moment";
import { Link } from "react-router-dom";

const Post = ({ id, timestamp, blog_image, category, description, title }) => {
  return (
    <div className="post">
      <img className="postImg" src={blog_image} alt={title} />
      <div className="postInfo">
        <div className="postCats">
          {category.map((cat) => {
            const { id, name } = cat;
            return (
              <span key={id} className="postCat">
                {name}
              </span>
            );
          })}
        </div>
        <Link to={`/post/${id}`} className="link-inherit">
          <h4 className="postTitle">{title}</h4>
        </Link>

        <hr />
        <span className="postDate">{moment(timestamp).calendar()}</span>
        <p className="postDesc">{description}</p>
      </div>
    </div>
  );
};

export default Post;
