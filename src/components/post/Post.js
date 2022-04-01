import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <h1>Single Post</h1>
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3762941/pexels-photo-3762941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <h4 className="postTitle">Lorem ipsum dolor sit.</h4>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sequi
          sunt eligendi aliquam deserunt, ratione deleniti vitae recusandae quis
          doloremque ipsa repellat, molestiae dicta placeat rerum architecto
          numquam tenetur. Officiis, nostrum harum? Sequi architecto ea
          asperiores voluptatibus maxime voluptas veritatis. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Minus sequi sunt eligendi
          aliquam deserunt, ratione deleniti vitae recusandae quis doloremque
          ipsa repellat, molestiae dicta placeat rerum architecto numquam
          tenetur. Officiis, nostrum harum? Sequi architecto ea asperiores
          voluptatibus maxime voluptas veritatis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Minus sequi sunt eligendi aliquam
          deserunt, ratione deleniti vitae recusandae quis doloremque ipsa
          repellat, molestiae dicta placeat rerum architecto numquam tenetur.
          Officiis, nostrum harum? Sequi architecto ea asperiores voluptatibus
          maxime voluptas veritatis.
        </p>
      </div>
    </div>
  );
};

export default Post;
