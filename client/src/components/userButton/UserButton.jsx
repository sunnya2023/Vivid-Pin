import { useState } from "react";
import "./userButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="default image" />
      <img
        src="/general/arrow.svg"
        alt=""
        className="arrow__icon"
        onClick={() => setOpen(!open)}
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
