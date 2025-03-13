import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="logo" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="home" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/add.svg" alt="new posting" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/alert.svg" alt="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/message.svg" alt="logo" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/message.svg" alt="logo" />
      </a>
    </div>
  );
};

export default LeftBar;
