import { Navbar } from "../styles/Navbar.styled";
import CallLogo from "../assets/svgs/CallLogo";
import EmailLogo from "../assets/svgs/EmailLogo";
import FacebookLogo from "../assets/svgs/FacebookLogo";
import FileLogo from "../assets/svgs/FileLogo";
import LinkedinLogo from "../assets/svgs/LinkedinLogo";
import HomeLogo from "../assets/svgs/HomeLogo";
import SkillsLogo from "../assets/svgs/SkillsLogo";
import PersonLogo from "../assets/svgs/PersonLogo";
import TwitterLogo from "../assets/svgs/TwitterLogo";
import LetterLogo from "../assets/svgs/Letter";
import GithubIcon from "../assets/svgs/GithubIcon";
import { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../assets/Context";

const Nav = () => {
  const { darkmode, toggle, setToggle } = useContext(Context);

  const trueToggler = () => setToggle(true);

  const falseToggler = () => setToggle(false);

  return (
    <Navbar
      toggle={toggle}
      onMouseEnter={trueToggler}
      onMouseLeave={falseToggler}
      onTouchStart={trueToggler}
      darkMode={darkmode}
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
          <Link href="/#about">
            <a>
              <PersonLogo /> <span>About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <a>
              <SkillsLogo /> <span>Skills</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/AllProjects">
            <a>
              <FileLogo /> <span>Projects</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>
              <CallLogo /> <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <a
            href="https://github.com/ibraheemsulay"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ibrahim-sule-23478919a"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a
            href="mailto:ibraheemsulay@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailLogo />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/ibraheemsulay"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ibraheemsulay/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo />
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
