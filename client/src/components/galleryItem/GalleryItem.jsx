import "./galleryItem.css";
import { Link } from "react-router";
import { IKImage } from "imagekitio-react";
import Image from "../Image/Image";

// const USLENDPOINT = import.meta.env.VITE_URL_ENDPOINT;

const GalleryItem = ({ item }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="image" /> */}

      <Image
        path={item.media}
        alt="이미지"
        w={item.width}
        height={item.height}
      />

      <Link to={`/post/${item.id}`} className="overlay" />
      <button className="btn saveBtn">Save</button>

      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="공유하기" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="더보기" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
