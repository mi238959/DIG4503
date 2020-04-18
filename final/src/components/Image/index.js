import React from 'react';
import Image from './MirandaFoster.jpg'; // Tell webpack this JS file uses this image
console.log(Image); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={Image} alt="Logo" />;
}
export default Header;