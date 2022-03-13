/* eslint-disable react/no-unescaped-entities */
import { AboutStyle } from "../styles/AboutStyle.styled";
import { HeroStyle } from "../styles/Hero.styled";
import { AboutImgStyle } from "../styles/AboutImgStyle.styled";
import Blob from "../assets/svgs/Blob";
import img from "../assets/img/image";
import { Row } from "../styles/Row.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { IAboutProps } from "../ts-types/componentTypes";
import { useContext } from "react";
import { Context } from "../assets/Context";

const About: React.FC<IAboutProps> = ({ about }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const { darkmode } = useContext(Context);

  return (
    <AboutStyle darkMode={darkmode} id="about">
      <Blob />
      <Row>
        <h3 id="about">About Me</h3>
      </Row>
      <div ref={ref} className={`about ${inView ? "el-fadeIn" : "el-fadeOut"}`}>
        <HeroStyle>
          <AboutImgStyle className="about">
            <div>
              <Image
                src={about[0].fields.photo}
                alt="ibrahim picture"
                layout="fill"
                priority={true}
              />
            </div>
          </AboutImgStyle>
          <div className="title">
            <p>{about[0].fields.about}</p>
            <Link href={`https:${about[0].fields.cv.fields.file.url}`}>
              <a>
                <Button>View CV</Button>
              </a>
            </Link>
          </div>
        </HeroStyle>
      </div>
    </AboutStyle>
  );
};

export default About;
