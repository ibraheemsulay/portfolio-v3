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
import Link from "next/link";
import { useContext, MouseEvent } from "react";
import { Context } from "../assets/Context";
import { useRouter } from "next/router";
import { INavProps } from "../ts-types/componentTypes";

const Nav: React.FC<INavProps> = ({ setEl }) => {
  const { darkmode, toggle, setToggle } = useContext(Context);

  const router = useRouter();

  const trueToggler = () => setToggle(true);

  const falseToggler = () => setToggle(false);

  const scrollToId = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const innerText = e.currentTarget.textContent!;
    const el = document.getElementById(innerText);
    if (router.pathname === "/AllProjects") {
      setEl(innerText);
      router.push("/");
      return;
    }
    el?.scrollIntoView(true);
  };

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
              <HomeLogo />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <button onClick={e => scrollToId(e)}>
            <PersonLogo />
            <span>About</span>
          </button>
        </li>
        <li>
          <button onClick={e => scrollToId(e)}>
            <SkillsLogo />
            <span>Skills</span>
          </button>
        </li>
        <li>
          <Link href="/AllProjects" scroll={false}>
            <a>
              <FileLogo />
              <span>Projects</span>
            </a>
          </Link>
        </li>
        <li>
          <button onClick={e => scrollToId(e)}>
            <CallLogo />
            <span>Contact</span>
          </button>
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
