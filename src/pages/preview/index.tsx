import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "antd";
import { getAllPathName } from "./utils";
// 这边从github图床站点去拿图片

const Preview = () => {
  const [imagePreview, setImagePreview] = useState([]);
  const baseUrl = "https://duke-mq.github.io/img-library/img/";
  console.log("imagePreview", imagePreview);

  useEffect(() => {
    const imagePreviewData = [];
    getAllPathName().then((allPath) => {
      allPath.forEach((item, index) => {
        imagePreviewData.push(
          <Image width={200} src={baseUrl + `${item}`} key={index} />
        );
      });
      setImagePreview(imagePreviewData);
    });
  }, []);
  return <> {imagePreview} </>;
};

export default Preview;
