import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <h5 className="mb-1">My Website</h5>
        <small>
          &copy; {new Date().getFullYear()} My Website | All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
