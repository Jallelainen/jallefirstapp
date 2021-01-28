import React from "react";

const Footer = (props) => {
  console.log(props);
  return (
    <div>
      <footer>
        <p>Copyright {props.name}</p>
      </footer>
    </div>
  );
};

export default Footer;
