import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
          
          <Col
            md={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
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
          
          <Col md={4} style={{ background: "var(--footer)" }}>
            <h2 style={{ background: "var(--footer)", direction : "rtl"}}>تواصل معنا</h2>
            
            <Form className="contact-form" method="POST"  netlify>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="البريد الإلكتروني" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="الأسم" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
              <Form.Control as="textarea" rows={4}  placeholder="مرحبا أنا 👋 ..." required/>

              <Button variant="primary" type="submit">
                إرسال
              </Button>
            </Form>
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
