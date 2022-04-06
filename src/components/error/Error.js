import "./error.css";

const Error = ({ children }) => {
  return (
    <div className="error">
      <h1 className="error_text">{children}</h1>
    </div>
  );
};

export default Error;
