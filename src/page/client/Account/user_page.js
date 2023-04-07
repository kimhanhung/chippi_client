import Contact from "../../../component_client/contact/Contact";
import Nav from "../../../component_client/Nav/nav";
import Header from "../../../component_client/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Account from "../../../component_client/Account";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";

const cx = classNames.bind(styles);

function Account_page() {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row style={{ margin: "0px" }}>
        <Col lg={2} style={{ padding: "0px" }}>
          <Nav />
        </Col>

        <Col lg={10}>
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
