import { useState } from "react";
import "./userButton.css";
import Image from "../Image/Image";
import { Link } from "react-router";

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
          <Link to="/:username" className="userOption">
            Profile
          </Link>
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
