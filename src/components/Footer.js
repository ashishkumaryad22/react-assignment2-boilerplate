import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1", width: "100%" }}
        >
          <div
            className="text-center p-3"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            © 2022 Copyright:
            <a className="text-dark" href="/">
              New App
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
