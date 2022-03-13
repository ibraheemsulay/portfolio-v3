import { ContactStyles } from "../styles/ContactStyles.styled";
import img from "../assets/img/image";
import { Button } from "../styles/Button.styled";
import Image from "next/image";

const Contact = () => {
  const date = new Date();

  return (
    <ContactStyles>
      <h3 id="contact">Contact Me</h3>
      <footer>
        <div>
          <Image
            src={img.email}
            height="90"
            width="100"
            alt="contact me picture"
            layout="responsive"
            priority={true}
          />
        </div>
        <div>
          <h4>Reach out in one click</h4>
          <p>
            Want to have a cup of coffee with me while we talk about building
            your amazing project ideas? Or do you have other opportunities you
            would like to share with me?
          </p>

          <a href="mailto:ibraheemsulay@gmail.com" rel="noreferrer">
            <Button>Email Me </Button>
          </a>
        </div>
      </footer>
      <span>&copy; {date.getFullYear()}</span>
    </ContactStyles>
  );
};

export default Contact;
