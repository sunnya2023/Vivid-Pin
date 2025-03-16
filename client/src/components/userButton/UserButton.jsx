import { useState } from "react";
import "./userButton.css";
import Image from "../Image/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="default image" />
      <Image
        path="/general/arrow.svg"
        alt=""
        className="arrow__icon"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login/Sign up
    </a>
  );
};

export default UserButton;
