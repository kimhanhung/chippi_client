import { useEffect, useState } from "react";
import Button from "../../button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBolt,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
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
  const [showDropdownNotification, setShowDropdownNotification] =useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <div className={cx("header")}>
      <Row>
        {/* <Col style={{background:"#FFFFFF"}}>
          <div className={cx("header-logo")}>
            <img className = {cx("img-logo")} src={require("../../assets/logo.jpg")} />
            <p className={cx("soft-name")}>CHIPPISOFT</p>
          </div>
        </Col> */}
        <Col xs={8} style={{ background: "#FFFFFF" }}>
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
        <Col xs={4} style={{ background: "#FFFFFF" }}>
          <div className={cx("header-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMagnifyingGlass} />
            <div
              className={cx("menu")}
              onMouseDown={() => setShowDropdownMenu(true)}
              onMouseLeave={() => setShowDropdownMenu(false)}
            >
              <FontAwesomeIcon className={cx("icon")} icon={faBell} />
              <div
                className={cx(
                  `${showDropdownMenu? "show" : "not-show"}`
               
                )}
              > <ul className={cx("list-item-user")}>
              <li className={cx("hower-li")}>Thông báo 1</li>
              <li className={cx("hower-li")}>Thông báo 2</li>
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
                  onMouseDown={() => setShowDropdownNotification(true)}
                  onMouseLeave={() => setShowDropdownNotification(false)}
                >
                  <p className={cx("sub-text")}>
                    User{" "}
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faChevronDown}
                    />
                  </p>
                  <div
                    className={cx(
                      `${showDropdownNotification ? "show" : "not-show"}`
                      
                    )}
                  >
                    <ul className={cx("list-item-user")}>
                      <li className={cx("hower-li")}>Thông tin cá nhân</li>
                      <li className={cx("hower-li")}>Đăng xuất</li>
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
