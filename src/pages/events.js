import React from "react";
import { useInView } from "react-intersection-observer";

import { Container, Col, Row, Tab, Tabs, Card } from "react-bootstrap";
import Events_img from "../assets/undraw_events_re_hc7k.svg";

import "../index.css";

function Events() {
  const { ref: RefHeader, inView: HeaderView } = useInView({
    triggerOnce: true,
  });
  const { ref: RefHeaderImg, inView: HeaderImgView } = useInView({
    triggerOnce: true,
    delay: 500,
  });

  return (
    <main>
      <Container className={`events-sec`}>
        <Row>
          <Col className={`events-side`}>
            <Row
              ref={RefHeader}
              className={`${HeaderView ? "fadeInRightBig" : "hidden"}`}
            >
              <h2 className={`events-header`}>
                فعاليات{" "}
                <span style={{ color: "var(--sec-text)", background: "none" }}>
                  النادي
                </span>
              </h2>
            </Row>
            <Row
              ref={RefHeaderImg}
              className={`${HeaderImgView ? "fadeInRightBig" : "hidden"}`}
            >
              <img src={Events_img} className={`events-img`} />
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

{
  /* <Col className={`events-board`}>
<Tabs
  defaultActiveKey="events"
  id="justify-tab-example"
  className="mb-3"
  justify
>
  <Tab eventKey="coming" title="القادمة">
    Tab content for Home
  </Tab>

  <Tab eventKey="done" title="المنقضية">
    Tab content for Profile
<h1>hello</h1>
  </Tab>

</Tabs>

</Col> */
}

export default Events;
