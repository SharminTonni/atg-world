import { FaCircle, FaPlay, FaSquare } from "react-icons/fa";

const SmallNavbar = () => {
  return (
    <div className="navbar block lg:hidden bg-base-100 ">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end mt-4 text-gray-500 space-x-2">
        <FaSquare></FaSquare>
        <FaCircle></FaCircle>
        <FaPlay></FaPlay>
      </div>
    </div>
  );
};

export default SmallNavbar;
