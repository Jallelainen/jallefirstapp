import React from "react";

const Footer = (props) => {
  console.log(props);
  return (
    <div className="footer">
      <footer>
        <p>Copyright {props.name}</p>
      </footer>
    </div>
  );
};

export default Footer;
