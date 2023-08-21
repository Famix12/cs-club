import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Vision_img from "../assets/undraw_target_re_fi8j.svg";
import "../index.css";

function About() {
  // about animation
  const { ref: RefAboutHeader, inView: AboutHeaderView } = useInView({
    triggerOnce: true,
  });
  const { ref: RefAboutText, inView: AboutTextView } = useInView({
    triggerOnce: true,
  });

  //   vision animation
  const { ref: RefVisionHeader, inView: VisionHeaderView } = useInView({
    triggerOnce: true,
  });
  const { ref: RefVisionText, inView: VisionTextView } = useInView({
    triggerOnce: true,
    delay : 500
  });
  const { ref: RefVisionImg, inView: AboutVisionImg } = useInView({
    triggerOnce: true,
  });


  return (
    <main>
      <Container className="main-sec2">
        <h1
          className={`sec2-heading ${
            AboutHeaderView ? "fadeInRightBig" : "hidden"
          }`}
          ref={RefAboutHeader}
        >
          عن{" "}
          <span style={{ color: "var(--sec-text)", background: "none" }}>
            النادي
          </span>
        </h1>
        <h5
          className={`sec2-content ${
            AboutTextView ? "fadeInLeftBig" : "hidden"
          } `}
          ref={RefAboutText}
        >
          تعد أندية النشاط الطلابي ملتقى مهماً لاكتشاف وتطوير وتنمية المواهب ،
          والعمل على تشجيع الابتكار والإبداع لدى الطلبة ، كما تعد الاندية مركز
          اشعاع علمي وثقافي واجتماعي ورياضي وفني يتيح للطلبة التواصل مع رواد هذه
          الأنشطة داخل الجامعة وخارجها ومصدر رئيس لعرض نتاجهم حتى يكونوا لبنة
          تثري المجتمع ومكتسب نفخر به
        </h5>
      </Container>

      <Container className="about-vision">
        <Row>
          <Col className="vision-content">
            <h2 ref={RefVisionHeader} className={`vision-header  ${VisionHeaderView ?'fadeInRightBig' : 'hidden'}`}>رؤيتنا</h2>
            <h5 ref={RefVisionText} className={`vision-text ${VisionTextView ?'fadeInLeftBig' : 'hidden'}`}>
              توفير بيئة تقنية سليمة تعمل على تعزيز إكتشاف و تطوير المهارات
              التقنيه لدى طلاب الكلية و نشر الثقافة و الوعي التقني لديهم
            </h5>
          </Col>
          <Col>
            <img ref={RefVisionImg} src={Vision_img} className={`vision-img   ${AboutVisionImg ?'fadeInLeftBig' : 'hidden'}`} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
