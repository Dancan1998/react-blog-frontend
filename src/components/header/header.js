import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg?cs=srgb&dl=pexels-orione-concei%C3%A7%C3%A3o-2983467.jpg&fm=jpg"
        className="headerImg"
        alt=""
      />
    </div>
  );
};

export default Header;
