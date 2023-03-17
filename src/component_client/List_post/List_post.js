import { useState } from "react";
import Button from "../../button/btn";
import classNames from "classnames/bind";
import styles from "../List_post/List_post.module.scss";
const cx = classNames.bind(styles);

function List_post() {
  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  // const [buttonStates, setButtonStates] = useState([
  //   "primary-hover-btn",
  //   "primary-btn",
  //   "primary-btn",
  //   "primary-btn",
  // ]);
  // const buttonClick = (index) => {
  //   const newButtonStates = buttonStates.map((buttonState, i) => {
  //     // console.log(buttonState);
  //     return i === index ? "primary-hover-btn" : "primary-btn";
  //   });

  //   setButtonStates(newButtonStates);
  // };
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className={cx("list")}>
        <div className={cx("list-block")}>
          <div className={cx("list-button")}>
            <div className={cx("btn")}>
              <Button
               className={cx({ 'primary-btn': true, 'primary-hover-btn': activeButton === 1 })}
               onClick={() => handleButtonClick(1)}
             
              >
                <p className={cx("text-btn")}>Tất cả</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
               className={cx({ 'primary-btn': true, 'primary-hover-btn': activeButton === 2 })}
               onClick={() => handleButtonClick(2)}
              >
                <p className={cx("text-btn")}>Thiết kế</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
               className={cx({ 'primary-btn': true, 'primary-hover-btn': activeButton === 3 })}
               onClick={() => handleButtonClick(3)}
              >
                <p className={cx("text-btn")}>Game</p>
              </Button>
            </div>
            <div className={cx("btn")}>
              <Button
               className={cx({ 'primary-btn': true, 'primary-hover-btn': activeButton === 4})}
               onClick={() => handleButtonClick(4)}
              >
                <p className={cx("text-btn")}>Văn phòng</p>
              </Button>
            </div>
          </div>
          <div className={cx("list-produce")}>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("list-produce-block")}>
              <div className={cx("produce")}>
                <div className={cx("produce-element")}>
                  <img
                    className={cx("img-produce")}
                    src={require("../../assets/img_produce.jpg")}
                  />
                  <div className={cx("infor")}>
                    <p className={cx("title")}>ADOBE PHOTOSHOP</p>
                    <div className={cx("author-view-block")}>
                      <label className={cx("author")}>
                        ADMIN 
                      </label>
                      <label className={cx("view")}>
                        {" "}
                        Lượt đọc <label className="view">25</label>{" "}
                      </label>
                    </div>

                    <p className={cx("des")}>
                      Mô tả:
                      {shortenText(
                        "Công cụ hỗ trợ trong việc chỉnh sửa ảnh, phục vụ nhu cầu của mọi người, đặc biệt là những người làm trong ngành thiết kế",
                        60
                      )}
                    </p>
                  </div>
                  <div className={cx("block-btn")}>
                    <div className={cx("produce-btn")}>
                      <Button className={cx("primary-btn")}>
                        <p className={cx("text-produce-btn")}>Xem chi tiết</p>
                      </Button>
                    </div>
                    <div className={cx("produce-btn")}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List_post;
