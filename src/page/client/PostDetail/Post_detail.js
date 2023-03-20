import Contact from "../../../component_client/contact/Contact";
import Nav from "../../../component_client/Nav/nav";
import Header from "../../../component_client/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Detail_post from "../../../component_client/Detail_post/Detail_post";
import classNames from "classnames/bind";
import styles from "./Post_detail.module.scss";

const cx = classNames.bind(styles);

function Post_page_detail() {
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row style={{ margin: "0px" }}>
        <Col sm={2} style={{ padding: "0px" }}>
          <Nav />
        </Col>

        <Col sm={10}>
          <div className={cx("content")}>
            <Detail_post />
            {/* <Detail_post/> */}
          </div>
        </Col>
      </Row>
      {/* <Contact/> */}
    </>
  );
}

export default Post_page_detail;
