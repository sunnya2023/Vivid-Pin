import { useState } from "react";
import Image from "../Image/Image";
import "./comments.css";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>

        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commntText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              facere aspernatur voluptates, aliquid dignissimos porr
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commntText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              facere aspernatur voluptates, aliquid dignissimos porr
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commntText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              facere aspernatur voluptates, aliquid dignissimos porr
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commntText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              facere aspernatur voluptates, aliquid dignissimos porr
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <div className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setOpen(!open)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
