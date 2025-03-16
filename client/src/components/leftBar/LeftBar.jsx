import Image from "../Image/Image";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <Image path="/general/logo.png" alt="logo" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/home.svg" alt="home" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/add.svg" alt="new posting" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/alert.svg" alt="logo" />
        </a>
        <a href="/" className="menuIcon">
          <Image path="/general/message.svg" alt="logo" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <Image path="/general/message.svg" alt="logo" />
      </a>
    </div>
  );
};

export default LeftBar;
