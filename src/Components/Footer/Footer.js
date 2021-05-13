import "./Footer.css";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="CopyrightContainer">
        Copyright © {new Date().getFullYear()} Daniel Stigmon, All rights
        reserved
      </div>
    </div>
  );
}
