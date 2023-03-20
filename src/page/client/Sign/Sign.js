import Sign_up from "../../../component_client/Sign/Sign_up";
import Sign_in from "../../../component_client/Sign/Sign_in";
// import Sign_in from "../../../component_client/Sign/Sign_up";
// import Sign_up from "../../../component_client/Sign/Sign_up";
import { useState, useEffect } from "react";
import Captcha from "../../../component_client/captcha/Captcha";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "../../button/btn";
import classNames from "classnames/bind";
import styles from "../Sign/Sign.module.scss";
import { type } from "@testing-library/user-event/dist/type";
const cx = classNames.bind(styles);
function Sign_client() {
    const [showLogIn, setShowLogIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const handleShowLogIn = (buttonId) => {
      setShowLogIn(false);
      setShowSignUp(true);
      setActiveButton(buttonId);
      console.log(typeof validated);
    };
    const handleShowSignUp = (buttonId) => {
      setShowSignUp(false);
      setShowLogIn(true);
      setActiveButton(buttonId);
    };

    const [activeButton, setActiveButton] = useState(1);

    // const handleButtonClick = (buttonId) => {
    //   setActiveButton(buttonId);
    // };
  return (
    <div className={cx("sign")}>
      <div className={cx("sign-block")}>
        <Row>
          <Col style={{ padding: "0" }}>
            <div className={cx("img")}>
              <img
                className={cx("img-background")}
                id="img-background"
                src={require("../../../assets/bk_sign.jpeg")}
              />
            </div>
          </Col>
          <Col style={{ padding: "0" }}>
            <div className={cx("sign-input")} id="sign">
              <div className={cx("button-sign")}>
                <div className={cx({'text':true, 'text-boder':activeButton===1})}
                onClick={()=>handleShowSignUp(1)}
                >ĐĂNG NHẬP</div>
                <div className={cx({'text':true, 'text-boder':activeButton===2})}
                onClick ={()=>handleShowLogIn(2)}
                >ĐĂNG KÝ</div>
              </div>
             { showLogIn && <Sign_in/>}
             {showSignUp && <Sign_up/>}
              {/* <div className={cx("sign-in-block")}>
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
                    <label className={cx("label-check-book")}>
                      ghi nhớ mật khẩu
                    </label>
                  </div>
                </div>
                <div className={cx("btn")}>
                  <Captcha />
                </div>
                <div className={cx("forgot-pass")}>
                  <p className={cx("text-forgot-pass")}>Quên mật khẩu?</p>
                </div>
              </div> */}
              
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Sign_client;
