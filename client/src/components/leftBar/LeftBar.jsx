import Image from "../Image/Image";
import "./leftBar.css";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image path="/general/logo.png" alt="logo" className="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="/general/home.svg" alt="home" />
        </Link>
        <Link to="/create" className="menuIcon">
          <Image path="/general/add.svg" alt="new posting" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="/general/alert.svg" alt="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <Image path="/general/message.svg" alt="logo" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <Image path="/general/message.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default LeftBar;
