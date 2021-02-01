import React from "react";

const Header = () => {
  return (
    <div className="header">
      <header>
        <navbar>
            <ul> 
                <li className="navItem">
                    <p>Home</p>
                </li>
                <li className="navItem">
                    <a href="/Counter">Counter</a>
                </li>
                <li className="navItem">
                    <a href="/MyPage">My page</a>
                </li>
                <li className="navItem">
                    <p>About us</p>
                </li>
            </ul>
        </navbar>
      </header>
    </div>
  );
};

export default Header;
