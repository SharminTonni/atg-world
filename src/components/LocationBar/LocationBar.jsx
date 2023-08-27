import { useContext, useRef, useState } from "react";
import {
  FaBurn,
  FaCaretDown,
  FaRegShareSquare,
  FaThumbsUp,
  FaUsers,
} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LocationBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [groups, setGroups] = useState(false);

  const groupnames = [
    {
      name: "Leisure",
      img: "https://img.freepik.com/premium-photo/hammock-beach-with-palm-trees-background_250469-19990.jpg?w=360",
      follow: false,
    },
    {
      name: "Activitivism",
      img: "https://i0.wp.com/clubexperience.blog/wp-content/uploads/2018/03/Supporting-Youth-Activism.png?fit=560%2C315&ssl=1",
      follow: false,
    },
    {
      name: "MBA",
      img: "https://www.businessbecause.com/uploads/default/news/images/1621507492.png",
      follow: false,
    },
    {
      name: "Philosophy",
      img: "https://www.infobooks.org/wp-content/uploads/2022/03/Philosophers-Books.webp",
      follow: false,
    },
  ];

  const [followStates, setFollowStates] = useState(groupnames.map(() => false));

  const nameRef = useRef();

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

  const handleGroups = () => {
    if (nameRef.current.value === null) {
      setGroups(false);
    } else {
      setGroups(true);
    }
  };

  return (
    <div className="">
      <div className="flex text-center justify-center items-center gap-4 mb-7">
        <button className="btn btn-active btn-ghost normal-case btn-sm hover:bg-slate-400">
          Write a post <FaCaretDown></FaCaretDown>
        </button>

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-sm bg-transparent normal-case text-gray-500"
          >
            <span className="text-xl ">
              <FaRegShareSquare></FaRegShareSquare>
            </span>
            Leave Group
          </button>
        ) : (
          <button className="btn btn-sm btn-info normal-case">
            <span className="text-xl text-white">
              <FaUsers></FaUsers>{" "}
            </span>
            Join Group
          </button>
        )}
      </div>
      <hr />

      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          {user && (
            <div>
              <div className="form-control relative">
                <span className="absolute top-4 left-1">
                  <FaBurn></FaBurn>
                </span>
                <input
                  type="text"
                  ref={nameRef}
                  placeholder=" Location"
                  onChange={handleGroups}
                  className="input pl-6 border-b-2 w-full max-w-xs focus:border-0 active:border-0"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-16">
          {groups && (
            <div>
              <div className="flex items-center justify-center gap-3">
                <span>
                  <FaThumbsUp></FaThumbsUp>
                </span>
                <span>Recommended Groups for You</span>
              </div>
              <div className="mt-6 w-full px-12">
                {groupnames.map((item, i) => (
                  <div
                    className="mb-1 py-2 px-1 flex gap-4 items-center"
                    key={i}
                  >
                    <img
                      className="w-14 h-14 rounded-full "
                      src={item?.img}
                      alt=""
                    />
                    <p>{item?.name}</p>
                    <button
                      onClick={() => {
                        const newFollowStates = [...followStates];
                        newFollowStates[i] = !newFollowStates[i];
                        setFollowStates(newFollowStates);
                      }}
                      className="btn btn-ghost btn-active btn-sm ml-auto"
                    >
                      {followStates[i] ? "Followed" : "Follow"}
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-blue-500 text-right">See more...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationBar;
