import { useEffect, useState } from "react";
import Button from "../../button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faBolt,
  faBell,
  faArrowRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { Dropdown,DropdownButton } from "react-bootstrap";
// import styles from"../Header/Header_client.scss";
// import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Header/Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  const [showDropdownNotification, setShowDropdownNotification] =
    useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showInputFind, setShowInputFind] = useState(false);
  const navigate = useNavigate();

  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  }
  return (
    <div className={cx("header")}>
      <Row>
        <Col sm={2} style={{ background: "#FFFFFF" }}>
          <div className={cx("header-logo")} onClick={() => navigate("/")}>
            <img
              className={cx("img-logo")}
              src={require("../../assets/logo.jpg")}
            />
            <p className={cx("soft-name")}>CHIPPISOFT</p>
          </div>
        </Col>
        <Col sm={6} style={{ background: "#FFFFFF" }}>
          <div className={cx("header-btn")}>
            <Button className={cx("tool-btn ")}>
              <p className={cx("text")}>
                <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} />{" "}
                CODE TOOL THEO YÊU CẦU
              </p>
            </Button>
            <Button className={cx("recharge-btn header-btn-global")}>
              <p className={cx("text")}>
                <FontAwesomeIcon className={cx("icon-btn")} icon={faBolt} />
                NẠP TIỀN
              </p>
            </Button>
          </div>
        </Col>
        <Col sm={4} style={{ background: "#FFFFFF" }}>
          <div
            className={cx("header-icon")}
            // onMouseDown ={()=> setShowInputFind(true)}
            // onMouseLeave ={()=>setShowInputFind(false)}
          >
            <div
              className={cx("input-block")}
              onMouseDown={() => setShowInputFind(true)}
              onMouseLeave={() => setShowInputFind(false)}
            >
              <input
                className={cx(
                  `${showInputFind ? "input-find" : "not-input-find"}`
                )}
                placeholder="Tìm kiếm"
              />
              <FontAwesomeIcon
                className={cx("icon")}
                icon={faMagnifyingGlass}
              />
            </div>

            <div
              className={cx("menu")}
              onMouseDown={() => setShowDropdownNotification(true)}
              onMouseLeave={() => setShowDropdownNotification(false)}
            >
              <FontAwesomeIcon className={cx("icon")} icon={faBell} />
              <div
                className={cx(
                  `${showDropdownNotification ? "show" : "not-show"}`
                )}
              >
                {" "}
                <ul className={cx("list-item-user")}>
                  <li className={cx("hower-li-noti")}>
                    {shortenText(
                      "Chương trình khuyến mãi khi dowload những app sau:",
                      30
                    )}
                  </li>
                  <li className={cx("hower-li-noti")}>
                    {" "}
                    {shortenText(
                      "Bạn đã đăng nhập từ một thiết bị khác, vui lòng kiểm tra lại tài khoản của",
                      30
                    )}
                  </li>
                  <li className={cx("hower-li-noti")}>Thông báo 3: admin</li>
                  <li className={cx("hower-li-noti")}>Thông báo 2</li>
                </ul>
                {/* <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item> */}
              </div>
            </div>

            <div className={cx("block-admin")}>
              <img
                className={cx("avatar-logo")}
                src={require("../../assets/avatar.jpg")}
              />
              <div className={cx("admin")}>
                <p className={cx("admin-name")}>DAM Xuan Ninh</p>
                <div
                  className={cx("dropdown")}
                  onMouseDown={() => setShowDropdownMenu(true)}
                  onMouseLeave={() => setShowDropdownMenu(false)}
                >
                  <p className={cx("sub-text")}>
                    User{" "}
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                  </p>
                  <div
                    className={cx(`${showDropdownMenu ? "show" : "not-show"}`)}
                  >
                    <ul className={cx("list-item-user")}>
                      <li
                        className={cx("hower-li")}
                        onClick={() => navigate("/accountUser")}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <label className={cx("menu-text")}>
                          {" "}
                          Thông tin cá nhân{" "}
                        </label>
                      </li>
                      <li
                        className={cx("hower-li")}
                        onClick={() => navigate("/sign")}
                      >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        <label className={cx("menu-text")}> Đăng xuất </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
