import { useEffect, useState } from "react";
import Button from "../../button/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBolt,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// import styles from"../Header/Header_client.scss";
// import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Header/Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <Row >
        <Col style={{background:"#FFFFFF"}}>
          <div className={cx("header-logo")}>
            <img className = {cx("img-logo")} src={require("../../assets/logo.jpg")} />
            <p className={cx("soft-name")}>CHIPPISOFT</p>
          </div>
        </Col>
        <Col xs={8} style={{background:"#FFFFFF"}}>
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
        <Col style={{background:"#FFFFFF"}}>
          <div className={cx("header-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faMagnifyingGlass} />
            <FontAwesomeIcon className={cx("icon")} icon={faBell} />
            <div className={cx("block-admin")}>
              <img
                className={cx("avatar-logo")}
                src={require("../../assets/avatar.jpg")}
              
              />
              <div className={cx("admin")}>
                <p className={cx("admin-name")}>DAM Xuan Ninh</p>
                <p className={cx("sub-text")}>
                  Admin{" "}
                  <FontAwesomeIcon
                    className={cx("icon")}
                    icon={faChevronDown}
                  />
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
