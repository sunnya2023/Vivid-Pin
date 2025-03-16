import Image from "../Image/Image";
import UserButton from "../userButton/UserButton";
import "./tobBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <Image path="/general/search.svg" alt="검색하기" />
        <input type="text" placeholder="search" />
      </div>

      <UserButton />
    </div>
  );
};

export default TopBar;
