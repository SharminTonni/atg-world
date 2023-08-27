import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Sociallogin from "../Social/Sociallogin";

const Register = ({ toggleForm }) => {
  const { createUser, manageUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const name = fname + " " + lname;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      return;
    }
    console.log(name, email, password, confirm);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        manageUserProfile(name).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account has been created",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        form.reset();
        console.log(createdUser);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    toggleForm();
  };
  return (
    <div>
      <div className="hero min-h-1/2 w-full">
        <div className="hero-content flex-col">
          <div className="  w-full max-w-sm mx-auto">
            <h1 className="text-left font-bold text-xl">Create New</h1>
            <form
              onSubmit={handleRegister}
              className="card-body border-2 rounded-lg"
            >
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="First name"
                  name="fname"
                  className="input input-bordered"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lname"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="confirm"
                  name="confirm"
                  placeholder="confirm"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6 flex items-center justify-between">
                <span>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Create"
                  />
                </span>
                <p
                  className="block lg:hidden link link-hover"
                  onClick={handleToggle}
                >
                  or Login
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

export default Register;
