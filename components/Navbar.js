import React, {useState} from "react";
import Link from "next/link";

import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [hamburgerDisplay, hamburgerToggle] = useState(false);

  const [navDisplay, navToggle] = useState(false);

  function handleClick() {
    if (!hamburgerDisplay) {
      hamburgerToggle(true);
      navToggle(true);
    } else {
      hamburgerToggle(false);
      navToggle(false);
    }
  }

  return (
    <nav>
      <ul>
        {/* <li>Play</li> */}
        <li><Link href='/info'>Find out more</Link></li>
        {/* <HamburgerMenu
          isOpen={hamburgerDisplay}
          menuClicked={handleClick}
          width={50}
          height={30}
          strokeWidth={5}
          rotate={0}
          color="#5fa28f"
          borderRadius={3}
          animationDuration={0.5}
        /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
