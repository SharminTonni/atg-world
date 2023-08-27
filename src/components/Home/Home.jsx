import { useContext, useState } from "react";
import MyModal from "../Modal/MyModal";
import "./Home.css";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";

const Home = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Left Group",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="cover flex items-end ">
      <div className="">
        <div className="  ml-8 lg:ml-32 lg:mb-20 mb-12 text-white">
          <h3 className="font-bold text-2xl">
            Computer Science And engineering
          </h3>
          <small>142,756 computer engineers follow this</small>
        </div>
      </div>
      <div className="lg:hidden flex">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-transparent border-2 text-white absolute top-20 px-4 py-2 rounded-lg right-4"
          >
            Leave Group
          </button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="bg-transparent border-2 text-white absolute top-20 px-4 py-2 rounded-lg right-4"
          >
            Join Group
          </button>
        )}
      </div>
      {/* modal */}
      <MyModal onClose={handleOnClose} visible={showModal}></MyModal>
    </div>
  );
};

export default Home;
