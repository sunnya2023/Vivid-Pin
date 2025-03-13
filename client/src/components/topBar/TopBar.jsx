import UserButton from "../userButton/UserButton";
import "./tobBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <img src="/general/search.svg" alt="검색하기" />
        <input type="text" placeholder="search" />
      </div>

      <UserButton />
    </div>
  );
};

export default TopBar;
