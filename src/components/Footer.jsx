import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="center">
        &copy; shakthi.com | <strong>My Next Js App V 13 </strong> | 2023
      </div>
      <div className="flex-row-center">
        <nav className="navbar">
          <ul>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Site Map</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
