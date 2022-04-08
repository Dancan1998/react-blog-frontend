import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { userToken = {} } = useSelector((state) => state.userLogin);
  const { access = "", refresh = "" } = userToken;

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //login here
    const { email, password } = loginCredentials;
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (access && refresh) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [access, refresh, navigate]);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
          name="email"
          value={loginCredentials.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          name="password"
          value={loginCredentials.password}
          onChange={handleChange}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="text-link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
