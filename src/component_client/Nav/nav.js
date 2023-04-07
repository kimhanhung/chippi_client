import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  faDollarSign,
  faCodePullRequest,
  faGauge,
  faChevronDown,
  faLock,
  faBarsStaggered,
  faClockRotateLeft,
  faUsers,
  faCreditCard,
  faRug,
  faBell,
  faGear,
  faBolt,
  faX,
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../../button/btn";
import { useEffect } from "react";

const cx = classNames.bind(styles);
function Nav(props) {
  const navigate = useNavigate();

  // handleClick
  const handleClick = (event, name) => {
    event.preventDefault();
    const elementClicked = event.target;
    const elementId = elementClicked.id;
    console.log(elementId);
    if (elementId) {
      const element = document.getElementsByClassName("nav-item");
      for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(cx("active"));
      }
      document.getElementById(`${elementId}-wrap`).classList.add(cx("active"));
    }
    navigate(`/${name}`);
  };

  const handleClickSubMenu = (event) => {
    const elementClicked = event.target;
    const elementId = elementClicked.id;
    console.log(elementId);
    if (elementId) {
      let menuId = `${elementId}-sub-menu`;
      document
        .getElementById(elementId)
        .classList.toggle(cx("active-btn-down"));
      if (
        document.getElementById(menuId).style.display === "none" ||
        document.getElementById(menuId).style.display === ""
      ) {
        document.getElementById(menuId).style.display = "block";
        localStorage.setItem(`${menuId}`, true);
      } else {
        document.getElementById(menuId).style.display = "none";
        localStorage.removeItem(`${menuId}`);
      }
    }
  };

  const _handleClose = () => {
    document.getElementById("nav").style.display = "none";
  };
  // Resize window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        document.getElementById("nav").classList.add(cx("open"));
      }
      // } else {
      //   document.getElementById("nav").classList.add(cx("open"));
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Clean up localStorage
  useEffect(() => {
    const cleanupLocalStorage = () => {
      const storageItem = ["product-btn-sub-menu", "history-btn-sub-menu"];
      storageItem.forEach((item) => localStorage.removeItem(item));
    };

    window.addEventListener("beforeunload", cleanupLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", cleanupLocalStorage);
    };
  }, []);

  return (
    <nav className={cx("wrapper")} id="nav">
      <div className={cx("nav-top")}>
        <div className={cx("nav-chippi")}
        onClick={()=>navigate("/")}
        >
          <div className={cx("nav-top-logo")}>
            <img
              className={cx("nav-top-logo-img")}
              src={require("../../assets/logo.jpg")}
            />
          </div>
          <div className={cx("nav-top-name")}>CHIPPISOFT </div>
        </div>

        <FontAwesomeIcon
          icon={faChevronLeft}
          id="nav-close"
          className={cx("nav-close")}
          onClick={_handleClose}
        />
      </div>

      <div className={cx("nav-list")}>
        <li className="nav-item" id="pd-wrap">
          <div className={cx("item-wrap", "nav-item-down")}
           onClick={()=> navigate("/list")}
          >
            <div
              className={cx("nav-item-left")}
             
            >
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className={cx("nav-icon")}
              />
              <div className={cx("nav-item-name")} id="pd">
                Sản phẩm
              </div>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                // className={cx("nav-icon", "icon-down")}
                className={
                  localStorage.getItem("product-btn-sub-menu")
                    ? cx("nav-icon", "icon-down", "active-btn-down")
                    : cx("nav-icon", "icon-down")
                }
                id="product-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div
          className={cx("nav-item-sub")}
          id="product-btn-sub-menu"
          style={
            localStorage.getItem("product-btn-sub-menu")
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <li
            className={`nav-item ${
              props.path === "product/category" ? cx("active") : ""
            } `}
            id="type-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/category"
                className={cx("sub-item-link")}
                onClick={(event) => handleClick(event, "product/category")}
                id="type"
              >
                Chuyên mục
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "product/list" ? cx("active") : ""
            } `}
            id="list-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/list"
                className={cx("sub-item-link")}
                id="list"
                onClick={(event) => handleClick(event, "product/list")}
              >
                Danh sách sản phẩm
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "product/order" ? cx("active") : ""
            } `}
            id="order-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/product/order"
                className={cx("sub-item-link")}
                id="order"
                onClick={(event) => handleClick(event, "product/order")}
              >
                Đơn hàng
              </a>
            </div>
          </li>
        </div>
        <li
          className={`nav-item ${props.path === "member" ? cx("active") : ""} `}
          id="mb-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faDollarSign} className={cx("nav-icon")} />
            <a
              href="/member"
              className={cx("nav-item-name")}
              id="mb"
              onClick={(event) => handleClick(event, "pay")}
            >
              Nạp tiền
            </a>
          </div>
        </li>
        <li className="nav-item" id="ht-wrap">
          <div className={cx("item-wrap", "nav-item-down")}
          
          onClick={()=> navigate("/listPost")}
          >
            <div className={cx("nav-item-left")}>
              <FontAwesomeIcon icon={faClipboard} className={cx("nav-icon")} />
              <div className={cx("nav-item-name")} id="ht">
                Bài viết
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={
                  localStorage.getItem("history-btn-sub-menu")
                    ? cx("nav-icon", "icon-down", "active-btn-down")
                    : cx("nav-icon", "icon-down")
                }
                id="history-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div
          className={cx("nav-item-sub")}
          id="history-btn-sub-menu"
          style={
            localStorage.getItem("history-btn-sub-menu")
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <li
            className={`nav-item ${
              props.path === "activity" ? cx("active") : ""
            } `}
            id="activity-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/activity"
                className={cx("sub-item-link")}
                id="activity"
                onClick={(event) => handleClick(event, "activity")}
              >
                Nhật ký hoạt động
              </a>
            </div>
          </li>
          <li
            className={`nav-item ${
              props.path === "balance" ? cx("active") : ""
            } `}
            id="balance-wrap"
          >
            <div className={cx("sub-item")}>
              <a
                href="/balance"
                className={cx("sub-item-link")}
                id="balance"
                onClick={(event) => handleClick(event, "balance")}
              >
                Biến động số dư
              </a>
            </div>
          </li>
        </div>

        <li
          className={`nav-item ${props.path === "pay" ? cx("active") : ""} `}
          id="p-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faUser} className={cx("nav-icon")} />
            <a
              href="/pay"
              className={cx("nav-item-name")}
              id="p"
              onClick={(event) => handleClick(event, "contact")}
            >
              Liên hệ
            </a>
          </div>
        </li>
        <li
          className={`nav-item ${props.path === "pay" ? cx("active") : ""} `}
          id="p-wrap"
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon
              icon={faCodePullRequest}
              className={cx("nav-icon")}
            />
            <a
              href="/pay"
              className={cx("nav-item-name")}
              id="p"
              onClick={(event) => handleClick(event, "")}
            >
              Code tool theo yêu cầu
            </a>
          </div>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
