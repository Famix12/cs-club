import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoMail } from "react-icons/go";
import Illustration from "./assets/undraw_reminders_re_gtyb.svg";

import "./index.css";

// I know !, the styling in this file is not the best practice. as long as it works, so i wont touch it :)

function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: "var(--footer)",
        margin: "0",
        padding: "0",
        color: "var(--main-text)",
        direction: "",
      }}
    >
      <Container>
        <Row>
          <Col md={4} style={{ background: "var(--footer)" }}>
            <h2 style={{ background: "var(--footer)" }}>تواصل معنا</h2>
            <p style={{ background: "var(--footer)" }}>
              <a
                href="mailto:contact@example.com"
                style={{
                  background: "var(--footer)",
                  textDecoration: "none",
                  color: "var(--sec-text)",
                }}
              >
                <GoMail style={{ background: "var(--footer)" }} />{" "}
                contact@example.com
              </a>
            </p>
          </Col>
          <Col md={4} style={{ background: "var(--footer)" }}>
            <h2 style={{ background: "var(--footer)", direction: "rtl" }}>
              روابط قد تهمك
            </h2>
            <ul style={{ background: "var(--footer)", direction: "rtl" }}>
              <li style={{ background: "var(--footer)", margin: "0 0 1vh 0" }}>
                <a
                  href="/aboutus"
                  style={{
                    background: "var(--footer)",
                    textDecoration: "none",
                    color: "var(--sec-text)",
                  }}
                >
                  من نحن
                </a>
              </li>
              <li style={{ background: "var(--footer)", margin: "0 0 1vh 0" }}>
                <a
                  href="http://www.jic.edu.sa/en/about/Pages/VMO.aspx"
                  target="_blank"
                  style={{
                    background: "var(--footer)",
                    textDecoration: "none",
                    color: "var(--sec-text)",
                  }}
                >
                  عن كلية الجبيل الصناعية
                </a>
              </li>
              <li style={{ background: "var(--footer)", margin: "0 0 1vh 0" }}>
                <a
                  href="/Team"
                  style={{
                    background: "var(--footer)",
                    textDecoration: "none",
                    color: "var(--sec-text)",
                  }}
                >
                  أعضاء إدارة النادي
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={4}
            style={{
              display: "flex",
              justifyContent: "right",
              background: "var(--footer)",
            }}
          >
            <img
              src={Illustration}
              alt="Illustration"
              height={"200vh"}
              style={{ background: "var(--footer)" }}
            />
          </Col>
        </Row>
        <Row style={{ background: "var(--footer)" }}>
          <hr />
        </Row>
        <Row style={{ background: "var(--footer)" }}>
          <p
            style={{
              fontWeight: "100",
              fontSize: "1.5vh",
              display: "flex",
              justifyContent: "center",
              background: "var(--footer)",
            }}
          >
            &copy; {new Date().getFullYear()} Computer Science & Information
            Technology Club at Jubail Industrial College
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
