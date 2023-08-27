import Navbar from "../Shared/Navbar";
import SmallNavbar from "../Shared/SmallNavbar/SmallNavbar";
import Home from "../components/Home/Home";
import Post from "../components/Post/Post";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SmallNavbar></SmallNavbar>
      {/* <Outlet></Outlet> */}
      <Home></Home>
      <Post></Post>
    </div>
  );
};

export default Main;
