import {
  FaBurn,
  FaCalendarAlt,
  FaCalendarDay,
  FaEllipsisH,
  FaEye,
  FaMicroscope,
  FaPen,
  FaRegClipboard,
  FaShareAlt,
  FaShoppingBag,
} from "react-icons/fa";

const PostCard = ({ item }) => {
  return (
    <div className="card  border-2  w-full mt-6">
      <figure>
        {item?.image && (
          <img className="w-full" src={item.image} alt="category image" />
        )}
      </figure>
      <div className="card-body text-left">
        <div className="flex items-center gap-2">
          {item?.category == "article" && (
            <span className="text-yellow-400">
              <FaPen></FaPen>
            </span>
          )}
          {item?.category == "education" && (
            <span className="text-blue-400">
              <FaMicroscope></FaMicroscope>
            </span>
          )}
          {item?.category == "Meet ups" && (
            <span className="">
              <FaCalendarAlt></FaCalendarAlt>
            </span>
          )}
          {item?.category == "job" && (
            <span className="text-amber-800">
              <FaShoppingBag></FaShoppingBag>
            </span>
          )}
          <p>{item?.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{item?.title}</h2>

          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1">
              <span>
                <FaEllipsisH></FaEllipsisH>
              </span>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Report</a>
              </li>
              <li>
                <a>Option 3</a>
              </li>
            </ul>
          </div>
        </div>
        {item?.description && <p>{item?.description}</p>}

        <div className="flex items-start w-2/3">
          {item?.date && (
            <p className="flex items-center gap-2">
              <span>
                <FaCalendarDay></FaCalendarDay>
              </span>
              <span>{item?.date}</span>
            </p>
          )}
          {item?.sub && (
            <p className="flex items-center gap-2">
              <span>
                <FaRegClipboard></FaRegClipboard>
              </span>
              <span>{item?.sub}</span>
            </p>
          )}
          {item?.location && (
            <p className="flex items-center gap-2">
              <span>
                <FaBurn></FaBurn>
              </span>
              <span>{item?.location}</span>
            </p>
          )}
        </div>

        {item?.website && (
          <div className="border-2 border-blue-100 font-semibold rounded-lg text-center py-2">
            {item?.website == "Apply on TimesJobs" && (
              <p className="text-emerald-500">{item?.website}</p>
            )}
            {item?.website == "Visit Website" && (
              <p className="text-orange-600 ">{item?.website}</p>
            )}
          </div>
        )}
        <div className="card-actions flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-16 h-16 mr-auto "
              src={item?.author?.img}
              alt=""
            />
            <span> {item?.author?.name}</span>
          </div>
          <div className="flex items-center gap-8">
            {item?.views && (
              <p className=" ml-auto mr-6 flex gap-1 items-center">
                <span className="">
                  <FaEye></FaEye>
                </span>{" "}
                <span>{item?.views}k </span>
              </p>
            )}
            <span className="bg-base-200 p-3 rounded-lg">
              <FaShareAlt></FaShareAlt>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
