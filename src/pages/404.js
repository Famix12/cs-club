import React from "react";
import "../index.css";
import { Container } from "react-bootstrap";
import NotFound_img from "../assets/404-page-not-found.svg"
function NotFound() {
  return (
    <Container style={{
        // background: "gray",
        borderRadius: "100%",
        height: "45vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "5vh"
    }}>

      <img
      src={NotFound_img}
      style={{
        background : "none",
        height : "30vh",
      }}
      />

      <h1 style={{
        color : "white",
        background: "none"
      }}>عذارً !  , الصفحة المطلوبه غير موجوده</h1>
    </Container>
    
  );
}

export default NotFound;
