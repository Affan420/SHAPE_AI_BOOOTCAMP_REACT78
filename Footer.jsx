import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear} from 'Affan'</p>
    </footer>
  );
}

export default Footer;
