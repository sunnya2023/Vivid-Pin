import Image from "../Image/Image";
import "./postInteractions.css";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="general/react.svg" alt="" />
        222
        <Image path="general/share.svg" alt="" />
        <Image path="general/more.svg" alt="" />
      </div>
      <button className="btn">Save</button>
    </div>
  );
};

export default PostInteractions;
