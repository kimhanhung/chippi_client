import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import {
  faDollarSign,
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
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
// import ReactDOM from "react-dom/client";

const cx = classNames.bind(styles);
function Nav() {
  const navigate = useNavigate();
  const [clickState, showClickState] = "";
  const handleClick = (event) => {
    const elementClicked = event.target;
    console.log(elementClicked);
    const elementId = elementClicked.id;
    const element = document.getElementsByClassName("Nav_nav-item__CP5be");
    if (elementId) {
      console.log(element);
      console.log(elementId);
      for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(cx("active"));
        console.log(i);
      }
      document.getElementById(elementId).classList.add(cx("active"));
    }
  };
  const handleClickSubMenu = (event) => {
    const elementClicked = event.target;
    const elementId = elementClicked.id;
    let menuId = `${elementId}-sub-menu`;

    if (elementId) {
      document
        .getElementById(elementId)
        .classList.toggle(cx("active-btn-down"));
      if (
        document.getElementById(menuId).style.display === "none" ||
        document.getElementById(menuId).style.display === ""
      ) {
        document.getElementById(menuId).style.display = "block";
      } else document.getElementById(menuId).style.display = "none";
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("nav-list", "desktop-reponsive")}>
        <li className={cx("nav-item", "fade")} id="product">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/list")}
            >
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className={cx("nav-icon")}
              />
              <div className={cx("nav-item-name")}>Sản phẩm</div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={cx("nav-icon", "icon-down")}
                id="product-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div className={cx("nav-item-sub", "fade")} id="product-btn-sub-menu">
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="type"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Thiết kế</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="list"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Tool facebook</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="order"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Tool zalo</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="order"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Giải capcha</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="order"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Tool twitter</div>
          </li>
        </div>
        <li
          className={cx("nav-item", "fade")}
          id="sercurity"
          onClick={handleClick}
        >
          <div className={cx("item-wrap")} onClick={() => navigate("/pay")}>
            <FontAwesomeIcon icon={faDollarSign} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Nạp tiền</div>
          </div>
        </li>

        <li className={cx("nav-item", "fade")} id="history">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/listPost")}
            >
              <FontAwesomeIcon icon={faClipboard} className={cx("nav-icon")} />
              <div className={cx("nav-item-name")}>Bài viết</div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={cx("nav-icon", "icon-down")}
                id="history-btn"
                onClick={handleClickSubMenu}
              />
            </div>
          </div>
        </li>
        <div className={cx("nav-item-sub", "fade")} id="history-btn-sub-menu">
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="type"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Thiết kế</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="list"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Game</div>
          </li>
          <li
            className={cx("sub-item-wrap", "nav-item", "fade")}
            id="list"
            onClick={handleClick}
          >
            <div className={cx("sub-item")}>Văn phòng</div>
          </li>
        </div>
        <li
          className={cx("nav-item", "fade")}
          id="members"
          onClick={handleClick}
        >
          <div className={cx("item-wrap")} onClick={() => navigate("/contact")}>
            <FontAwesomeIcon icon={faUsers} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Liên hệ</div>
          </div>
        </li>
        {/* <li className={cx("nav-item", "fade")} id="pay" onClick={handleClick}>
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faCreditCard} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Phương thức thanh toán</div>
          </div>
        </li>
        <li className={cx("nav-item", "fade")} id="posts" onClick={handleClick}>
          <div className={cx("item-wrap")}>
            {" "}
            <FontAwesomeIcon icon={faClipboard} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Bài viết</div>
          </div>
        </li>
        <li
          className={cx("nav-item", "fade")}
          id="discount"
          onClick={handleClick}
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faRug} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Khuyến mãi/ Giảm giá</div>
          </div>
        </li>
        <li className={cx("nav-item", "fade")} id="noti" onClick={handleClick}>
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faBell} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Thông báo</div>
          </div>
        </li>
        <li
          className={cx("nav-item", "fade")}
          id="setting"
          onClick={handleClick}
        >
          <div className={cx("item-wrap")}>
            <FontAwesomeIcon icon={faGear} className={cx("nav-icon")} />
            <div className={cx("nav-item-name")}>Cài đặt</div>
          </div>
        </li> */}
      </div>
      <div className={cx("nav-list", "mobile-reponsive")}>
        <li className={cx("nav-item", "fade")} id="product">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/list")}
            >
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className={cx("nav-icon")}
              />
            </div>
          </div>
        </li>
        <li className={cx("nav-item", "fade")} id="product">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/list")}
            >
              <FontAwesomeIcon
                icon={faDollarSign}
                className={cx("nav-icon")}
              />
            </div>
          </div>
        </li>
        <li className={cx("nav-item", "fade")} id="product">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/list")}
            >
              <FontAwesomeIcon
                icon={faClipboard}
                className={cx("nav-icon")}
              />
            </div>
          </div>
        </li>
        <li className={cx("nav-item", "fade")} id="product">
          <div className={cx("item-wrap", "nav-item-down")}>
            <div
              className={cx("nav-item-left")}
              onClick={() => navigate("/list")}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className={cx("nav-icon")}
              />
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}

export default Nav;
