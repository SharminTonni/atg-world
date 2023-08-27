import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import MyModal from "../components/Modal/MyModal";
import { useState } from "react";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="navbar hidden lg:flex bg-base-100 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src="logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="navbar-end">
        <p onClick={() => setShowModal(true)}>
          <small className="flex">
            <span>Create Account.</span>
            <Link className="text-blue-700 flex items-center gap-1">
              <span>It&apos;s Free</span>
              <FaArrowDown></FaArrowDown>
            </Link>
          </small>
        </p>
      </div>
      <MyModal onClose={handleOnClose} visible={showModal}></MyModal>
    </div>
  );
};

export default Navbar;
