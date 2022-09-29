import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import pepe from "../assets/img/pepe.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={pepe} alt="pepe" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/SquirtleHub"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/sazzeddi.op/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://steamcommunity.com/id/squirtleop001/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. Created by SquirtleHub "42 Berlin"</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
