import React from "react";

import { Container, Col, Row, Tab, Tabs, Card } from "react-bootstrap";
import Events_img from "../assets/undraw_events_re_hc7k.svg";

import "../index.css";

function Events() {
  return (
    <main>
      <Container className={`events-sec`}>
        <Row>
          <Col className={`events-board`}>
            {/*             
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
           */}
     
          </Col>

          <Col className={`events-side`}>
            <Row>
              <h2 className={`events-header`}>
                فعاليات{" "}
                <span style={{ color: "var(--sec-text)", background: "none" }}>
                  النادي
                </span>
              </h2>
            </Row>
            <Row>
              <img src={Events_img} className={`events-img`} />
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Events;
