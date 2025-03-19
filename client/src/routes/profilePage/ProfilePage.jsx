import { useState } from "react";
import Image from "../../components/Image/Image";
import "./profilePage.css";
import Collections from "../../components/collections/Collections";
import Gallery from "../../components/gallery/Gallery";

const ProfilePage = () => {
  const [type, setType] = useState("created");

  return (
    <div className="profilePage">
      <Image className="profileImg" path="/general/noAvatar.png" alt="" />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@hohndoe</span>
      <div className="followCounts">10 followers · 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileBtns">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : "created"}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : "saved"}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
