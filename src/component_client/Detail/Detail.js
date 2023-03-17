import { useState } from "react";
import Button from "../../button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Detail/Detail.module.scss";

const cx = classNames.bind(styles);

function Detail() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (selectedImage) => {
    setSelectedImage(selectedImage);
    console.log( typeof(selectedImage) );
  };
  return (
    <div className={cx("block")}>
      <Row>
        <Col sm={8}>
          <Row>
            <Col sm={3}>
              <div className={cx("img")}>
                <img
                  className={cx("sub-img-detail")}
                  src={require("../../assets/1.jpg")}
                  onClick={() => handleImageClick("../../assets/1.jpg")}
                />
                <img
                  className={cx("sub-img-detail")}
                  src={require("../../assets/2.jpg")}
                  onClick={() => handleImageClick("../../assets/2.jpg")}
                />
                <img
                  className={cx("sub-img-detail")}
                  src={require("../../assets/bk_sign.jpeg")}
                  onClick={() => handleImageClick("../../assets/bk_sign.jpeg")}
                />
              </div>
            </Col>
            <Col sm={9}>
              {" "}
              {selectedImage && (
                <div className="image-popup">
                  {/* <img src={selectedImage} alt="Selected image" /> */}
                  <img
                    className={cx("img-detail")}
                    src= {selectedImage}
                  />
                </div>
               )} 
              {/* <img
                className={cx("img-detail")}
                src={require("../../assets/logo.jpg")}
              /> */}
            </Col>
          </Row>
        </Col>

        <Col sm={4}>
          <div className={cx("infor-detail")}>
            <div className={cx("nav")}>
              <p>Sản phẩm / thiết kế</p>
            </div>
            <div className={cx("title")}>Adobe Photoshop CS6</div>
            <div className={cx("price")}>$2.000.000</div>
            <div className={cx("introduce")}>
              <p>
                Sản phẩm hỗ trợ thiết kế ảnh 2D, 3D, vector với nhiều tính năng
                ưu việt vjppro
              </p>
            </div>
            <div className={cx("day")}>
              <Button className={cx("primary-btn")} onClick={handleDecrement}>
                -
              </Button>
              <input
                className={cx("input-day")}
                type="number"
                value={quantity}
                readOnly
              />
              <Button className={cx("primary-btn")} onClick={handleIncrement}>
                +
              </Button>
            </div>
            <div className={cx("button-block")}>
              <Button className={cx("buy-now-btn")}>
                {" "}
                <p className={cx("text-buy-now")}>MUA NGAY</p>{" "}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className={cx("des")}>
        <p>viết đoạn văn ngắn tại đây</p>
      </div>
    </div>
  );
}

export default Detail;
