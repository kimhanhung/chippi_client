import Contact from "../../../component_client/contact/Contact";
import Nav from "../../../component_client/Nav/nav";
import Header from "../../../component_client/Header/header";
import Pay from "../../../component_client/Pay/Pay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./Pay_page.module.scss";

const cx = classNames.bind(styles);
function Pay_page() {
  return (
    <>
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
              <Pay />
              {/* <Contact/> */}
              {/* <Slider/>
            <Detail_post/>
            <List_post/>
            <Detail/>
            <List />
            <Transaction/> */}
            </div>
          </Col>
        </Row>
        {/* <Contact/> */}
      </>
    </>
  );
}

export default Pay_page;
