import { IKImage } from "imagekitio-react";
import React from "react";

const USLENDPOINT = import.meta.env.VITE_URL_ENDPOINT;

const Image = ({ path, width, height, alt, className, onClick }) => {
  return (
    <IKImage
      urlEndpoint={USLENDPOINT}
      path={path}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
      onClick={onClick}
    />
  );
};

export default Image;
