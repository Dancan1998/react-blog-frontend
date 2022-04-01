import TopBar from "./components/topbar/topbar";
import Write from "./pages/create/Write";
import Home from "./pages/home/home";
import Single from "./pages/single/Single";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Write />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<Single />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
