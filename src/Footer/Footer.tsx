import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./Footer.scss";

gsap.registerPlugin(ScrollTrigger);

const currentYear = new Date().getFullYear();
export default function Footer() {
  useGSAP(() => {
    gsap.from(".footer-col", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <Link to="header" smooth={true} duration={500}>
            <img src="main-logo.svg" alt="logo" className="nav__logo" />
          </Link>
          <p className="footer-col__item">
            All rights reserved
            <br />
            by Tripper Co. @ {currentYear}
          </p>
        </div>
        <div className="footer-col">
          <h3 className="footer-col__heading">Quick Links</h3>
          <ul className="footer-nav__list footer-list">
            <li className="footer-nav__item footer-col__item">
              <Link offset={100} to="trips" smooth={true} duration={1000}>
                Trips
              </Link>
            </li>
            <li className="footer-nav__item footer-col__item">
              <Link offset={100} to="team" smooth={true} duration={1000}>
                Team
              </Link>
            </li>
            <li className="footer-nav__item footer-col__item">
              <Link offset={100} to="faq" smooth={true} duration={1000}>
                FAQ
              </Link>
            </li>
            <li className="footer-nav__item footer-col__item">
              <Link offset={100} to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col__heading">Our Socials</h3>
          <ul className="footer-social__list footer-list">
            <li className="footer-social__item footer-col__item">
              <a href="#">Facebook</a>
            </li>
            <li className="footer-social__item footer-col__item">
              <a href="#">Instagram</a>
            </li>
            <li className="footer-social__item footer-col__item">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col__heading">Get in Touch</h3>
          <ul className="footer-social__list footer-list">
            <li className="footer-social__item footer-col__item">
              <p>
                123 Adventure Lane,
                <br />
                Wilderness City, Earth
              </p>
            </li>
            <li className="footer-social__item footer-col__item">
              <p>+1 234 567 890</p>
            </li>
            <li className="footer-social__item footer-col__item">
              <p>contact@tripper.com</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
