import Contact from "../../../component_client/contact/Contact";
import Nav from "../../../component_client/Nav/nav";
import Header from "../../../component_client/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Account from "../../../component_client/Account";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Account_page() {
  const location = useLocation();
  const name = location.pathname;
  let router = name.substring(1);

  return (
    <>
    <Row><Header /></Row>
      <Row style={{ padding: "0" }}>
        <div className={cx("col-custom")}>
          <Nav path={router} />
        </div>

        <Col lg={12} id="content">
          <div className={cx("content")}>
            <Account />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default Account_page;
