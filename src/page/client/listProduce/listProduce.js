import Header from "../../../component_client/Header/header";
import Nav from "../../../component_client/Nav/nav";
import List from "../../../component_client/List/List";
import Detail from "../../../component_client/Detail/Detail";
import Transaction from "../../../component_client/Transaction_table/Transaction_table";
import Slider from "../../../component_client/Slider/Slider";
import Detail_post from "../../../component_client/Detail_post/Detail_post";
import List_post from "../../../component_client/List_post/List_post";
import Button from "../../../button/btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from "classnames/bind";
import styles from "../Page.module.scss";

const cx = classNames.bind(styles);
function List_page() {
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
            <List />
            <Transaction />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default List_page;
