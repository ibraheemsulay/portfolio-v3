import { HeroStyle } from "../styles/Hero.styled";
import { HeroImgStyle } from "../styles/HeroImgStyle.styled";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(".hero_animate", {
      opacity: 0,
      y: -100,
      ease: "elastic(1, 0.4)",
      delay: 1,
      stagger: 0.5,
    }).from(
      ".img_wrapper",
      {
        x: 1000,
        rotateZ: 480,
      },
      "-=1"
    );
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
