import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Sociallogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignin()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="flex flex-col w-full justify-center items-center border-opacity-50 mb-4">
      <div className="flex items-center gap-2">
        <button className="text-blue-600 text-2xl">
          {" "}
          <FaFacebook></FaFacebook>
        </button>{" "}
        <span>Login With Facebook</span>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={handleGoogle} className="text-red-500 text-xl">
          {" "}
          <FaGoogle></FaGoogle>
        </button>
        <span>Login With Google</span>
      </div>
    </div>
  );
};

export default Sociallogin;
