const Title = () => (
  <a href="/">
    <h1>FoodApp</h1>
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default Header;
