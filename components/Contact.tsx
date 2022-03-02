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
          <img
            src={img.email}
            // width="100"
            // height="100"
            alt="contact me picture"
            // layout="fill"
          />
        </div>
        <div>
          <h4>Reach out in one click</h4>
          <p>
            Want to have a cup coffee with me while we talk about tech or do you
            have any amazing project you want me to work on?{" "}
          </p>
          <Button>Email Me</Button>
        </div>
      </footer>
      <span>&copy; {date.getFullYear()}</span>
    </ContactStyles>
  );
};

export default Contact;
