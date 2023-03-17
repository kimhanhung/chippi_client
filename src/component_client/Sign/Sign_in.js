import { useState, useEffect } from "react";
import Captcha from "../captcha/Captcha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../button/btn";
import classNames from "classnames/bind";
import styles from "../Sign/Sign_in.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);

function Sign_in() {
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const divElement = document.getElementById("sign");
    if (divElement) {
      setDivHeight(divElement.clientHeight);
    }
  }, []);
  console.log(divHeight);
  // const height = divElement.clientHeight;
  // const imgElement = document.getElementById('img-background');
  // imgElement.style.height = height + 'px';
  return (
    <div className={cx("sign-in-block")}>
      <div className={cx("input-block")}>
        <div className={cx("user-name")}>
          <p className={cx("label-user")}>tên tài khoản</p> <br />
          <input className={cx("input")} placeholder="tài khoản" />
        </div>
        <div className={cx("user-password")}>
          <p className={cx("label-user")}>mật khẩu</p> <br />
          <input
            className={cx("input")}
            type="password"
            placeholder="mật khẩu"
          />
        </div>
        <div className={cx("check-box ")}>
          <input className={cx("input-check-box")} type="checkbox" />
          <label className={cx("label-check-book")}>ghi nhớ mật khẩu</label>
        </div>
      </div>
      <div className={cx("btn")}>
        <Captcha />
        {/* <Button className={cx("tool-btn ")}>
              <p className={cx("btn-text")}>
                ĐĂNG NHẬP
              </p>
            </Button> */}
      </div>
      <div className={cx("forgot-pass")}>
        <p className={cx("text-forgot-pass")}>Quên mật khẩu?</p>
      </div>
    </div>
  );
}

export default Sign_in;
