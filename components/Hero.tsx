import { HeroStyle } from "../styles/Hero.styled";
import { HeroImgStyle } from "../styles/HeroImgStyle.styled";
import image from "emoji.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <HeroStyle>
      <div className="title">
        <h1>Hi, My name is ibrahim</h1>
        <p>I am a frontend developer from Lagos, Nigeria.</p>
      </div>
      <HeroImgStyle>
        <div>
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
