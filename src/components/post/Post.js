import "./post.css";
import moment from "moment";

const Post = ({ timestamp, blog_image, category, description, title }) => {
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
        <h4 className="postTitle">{title}</h4>
        <hr />
        <span className="postDate">{moment(timestamp).calendar()}</span>
        <p className="postDesc">{description}</p>
      </div>
    </div>
  );
};

export default Post;
