import "./navbar.css";
import Logo from "./assets/Logo.png";

const navbar = () => {
  return (
    <>
      <div className="BG">
        <div className="navbar">
          <img src={Logo} alt="logo" />

          <ul className="navbar-text">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default navbar;
