import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Mohd Sajid.</div>
      <div>
        <Link to={""} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"www.youtube.com/@sajkh"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"www.linkedin.com/in/mohd-sajid-723ba6249"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;