import { HeroStyle } from "../styles/Hero.styled";
import { HeroImgStyle } from "../styles/HeroImgStyle.styled";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="hero-component">
      <HeroStyle>
        <div className="title">
          <h1 className="hero_title">Hi, My name is ibrahim</h1>
          <p className="description">
            I am a frontend developer from Lagos, Nigeria.
          </p>
        </div>
        <HeroImgStyle>
          <div className="img_wrapper img-wrapper-animate">
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
    </div>
  );
};

export default Hero;
