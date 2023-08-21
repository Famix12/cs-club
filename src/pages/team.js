import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';

import Muath from "../assets/team_photos/muath.png";
import Thamer_L from "../assets/team_photos/Thamer_L.png";
import Thamer_B from "../assets/team_photos/Thamer_B.png";
import Nawaf from "../assets/team_photos/Nawaf.png";
import Abdulrahman from "../assets/team_photos/Abdulrahman.png";
import Fisal from "../assets/team_photos/Fisal.png";

import CC2 from "../assets/pattern.svg";

import "../index.css";

function Team() {
  return (
    <>
        <h2 style={{textAlign: "center", color:"var(--main-text)", fontWeight : "700", marginBottom : "5vh"}}>فريق إدارة النادي</h2>
      <Container className="team-memberConainer">


        <TeamMember photo={Muath} name="معاذ الغامدي" position="قائد النادي" />
        <TeamMember photo={Thamer_L} name="ثامر اللقماني" position="المنصب" />
        <TeamMember photo={Thamer_B} name="ثامر بالحارث" position="المنصب" />
        <TeamMember photo={Nawaf} name="نواف الحربي" position="المنصب" />
        <TeamMember photo={Abdulrahman} name="عبدالرحمان غصنة" position="المنصب" />
        <TeamMember photo={Fisal} name="فيصل يغمور" position="المنصب" />
      </Container>
    </>
  );
}

function TeamMember(props) {
    
    const { ref : RefTeam  , inView : TeamView } = useInView({
        triggerOnce : true
    });
  
    return (
    <div ref={RefTeam} className={`team-memberCard  ${TeamView ? 'fadeInUp' : 'hidden' }`}>
      <Row>
        <Col className="team-memberInfo">
          <h2>{props.name}</h2>
          <h4>{props.position}</h4>
        </Col>
        <Col>
          <Image
            src={props.photo}
            roundedCircle
            style={{
              height: "20vh",
              backgroundImage: `url(${CC2})`,
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
export default Team;
