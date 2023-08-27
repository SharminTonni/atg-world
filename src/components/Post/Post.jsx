import LocationBar from "../LocationBar/LocationBar";
import PostTab from "../PostTab/PostTab";

const Post = () => {
  return (
    <div className="lg:flex  lg:max-w-6xl w-full mx-auto mt-12">
      <div className="w-full lg:w-2/3">
        <PostTab></PostTab>
      </div>
      <div className=" w-1/3 hidden lg:block">
        <LocationBar></LocationBar>
      </div>
    </div>
  );
};

export default Post;
