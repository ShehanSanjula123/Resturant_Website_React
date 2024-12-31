import React, { useState } from "react";
import restApi from "../restApi.json"; // Ensure this path is correct for your file structure
import { GiHamburgerMenu} from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const navbarLinks = restApi.navbarLinks || []; // Corrected to access `navbarLinks` directly

  return (
    <nav>
      <div className="logo">ZEESH</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.link}`}>{link.title}</a> {/* Use link.title and link.link */}
              </li>
            ))}
          </ul>
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
