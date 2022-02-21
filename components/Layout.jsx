import { LayoutStyle } from "../styles/LayoutStyle.styled.js";
import Nav from "./Navbar";
import MainBody from "./MainBody";
// import AllProjects from "../views/AllProjects.jsx";

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Nav />
      <div>
        {children}
        <MainBody />
      </div>
      {/* <AllProjects /> */}
    </LayoutStyle>
  );
};

export default Layout;
