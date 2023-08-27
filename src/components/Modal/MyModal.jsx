import { useState } from "react";
import Login from "../../Shared/Login/Login";
import Register from "../../Shared/Register/Register";
import "./Modal.css";

const MyModal = ({ visible, onClose }) => {
  const [showLogin, setShowLogin] = useState(false);
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  if (!visible) return null;

  return (
    <div className="h-auto scroll z-30 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end  items-end lg:items-center">
      <div className="bg-white relative rounded-lg w-full lg:w-2/3 mx-auto">
        <div className="text-end">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle text-black btn-ghost bg-red-500 "
          >
            ✕
          </button>
          <div>
            <p className="w-full hidden lg:block bg-green-200 py-2 px-8 text-green-600 font-semibold">
              Let&apos;s Learn, Share and Inspire each other with our passion to
              computer engineering. Sign up now.
            </p>
            <div className="flex lg:justify-around">
              <div>
                {showLogin ? (
                  <Login toggleForm={toggleForm}></Login>
                ) : (
                  <Register toggleForm={toggleForm}></Register>
                )}
              </div>
              <div className="flex flex-col justify-center lg:items-center">
                <p className="text-end hidden lg:block">
                  {showLogin ? (
                    <div>
                      Already Have an Account.{" "}
                      <button onClick={toggleForm} className="text-blue-600">
                        Create new
                      </button>
                    </div>
                  ) : (
                    <div>
                      Don&apos;t Have an Account.{" "}
                      <button onClick={toggleForm} className="text-blue-600">
                        Sign In
                      </button>
                    </div>
                  )}
                </p>
                <div className="hidden lg:block">
                  <img src="login.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
