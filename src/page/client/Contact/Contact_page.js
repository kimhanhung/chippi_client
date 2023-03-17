import Contact from "../../../component_client/contact/Contact";
import Nav from "../../../component_client/Nav/nav";
import Header from "../../../component_client/Header/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "./Contact_page.module.scss";

const cx = classNames.bind(styles);

function Contact_page() {
    return (  
        <>
          <Header />
      <Row style={{ margin: "0px" }}>
        <Col sm={2}>
          <Nav />
        </Col>

        <Col sm={10}>
          <div className={cx("content")}>
            <Contact/>
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
    );
}

export default Contact_page;