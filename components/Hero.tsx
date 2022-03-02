import { HeroStyle } from "../styles/Hero.styled";
import { HeroImgStyle } from "../styles/HeroImgStyle.styled";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Hero: React.FC = () => {
  useEffect(() => {
    // const h1 = CSSRulePlugin.getRule("h1:after"),
    //   p = CSSRulePlugin.getRule("p:after");
    gsap.from(".hero_animate", {
      opacity: 0,
      duration: 1.3,
      y: -100,
      ease: "elastic(1, 0.4)",
      delay: 1,
      stagger: 0.5,
    });

    // gsap.from(p, {
    //   opacity: 0,
    // });

    gsap.from(".img_wrapper", {
      duration: 1,
      x: 1000,
      rotateZ: 480,
      delay: 1.7,
    });
  });
  return (
    <HeroStyle>
      <div className="title">
        <h1 className="hero_animate">Hi, My name is ibrahim</h1>
        <p className="description hero_animate">
          I am a frontend developer from Lagos, Nigeria.
        </p>
      </div>
      <HeroImgStyle>
        <div className="img_wrapper">
          <Image
            src={
              "https://res.cloudinary.com/ibraheemsulay/image/upload/v1645458443/emoji_esscto.png"
            }
            alt="avi"
            layout="fill"
          />
        </div>
      </HeroImgStyle>
    </HeroStyle>
  );
};

export default Hero;
