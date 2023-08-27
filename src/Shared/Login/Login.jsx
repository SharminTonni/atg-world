import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Sociallogin from "../Social/Sociallogin";

const Login = ({ toggleForm }) => {
  const { loginUser, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();

  const handleReset = () => {
    const email = emailRef.current.value;
    console.log(email);
    resetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Check Your Email",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => console.log(error));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    });
  };

  const handleToggle = () => {
    toggleForm();
  };
  return (
    <div>
      <div className="hero min-h-1/2">
        <div className="hero-content flex-col">
          <div className="card  w-full max-w-sm ">
            <h1 className="text-left font-bold text-xl">Sign In</h1>
            <form
              onSubmit={handleLogin}
              className="card-body border-2 rounded-lg"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button
                    onClick={handleReset}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6 flex items-center justify-between">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />{" "}
                <p
                  className="block lg:hidden link link-hover"
                  onClick={handleToggle}
                >
                  or Create New
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Sociallogin></Sociallogin>
    </div>
  );
};

export default Login;
