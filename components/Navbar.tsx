import { Navbar } from "../styles/Navbar.styled";
import CallLogo from "../assets/svgs/CallLogo";
import EmailLogo from "../assets/svgs/EmailLogo";
import FacebookLogo from "../assets/svgs/FacebookLogo";
import FileLogo from "../assets/svgs/FileLogo";
import LinkedinLogo from "../assets/svgs/LinkedinLogo";
import HomeLogo from "../assets/svgs/HomeLogo";
import WhatsappLogo from "../assets/svgs/WhatsappLogo";
import PersonLogo from "../assets/svgs/PersonLogo";
import TwitterLogo from "../assets/svgs/TwitterLogo";
import LetterLogo from "../assets/svgs/Letter";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const trueToggler = () => setToggle(true);
  const falseToggler = () => setToggle(false);

  return (
    <Navbar
      toggle={toggle}
      onMouseEnter={trueToggler}
      onMouseLeave={falseToggler}
    >
      <div>
        <LetterLogo />
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>
              <HomeLogo /> <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="#about">
            <PersonLogo /> <span>About</span>
          </a>
        </li>
        <li>
          <Link href="/AllProjects">
            <a>
              <FileLogo /> <span>Projects</span>
            </a>
          </Link>
        </li>
        <li>
          <a href="#contact">
            <CallLogo /> <span>Contact</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">
            <WhatsappLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <EmailLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo />
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
