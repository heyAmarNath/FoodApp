import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <h1>FoodApp</h1>
  </Link>
);

// const isLoggedIn = () => {
//   return true;
// };

const Header = () => {
  console.log("header render");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="login-btn"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="login-btn"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
