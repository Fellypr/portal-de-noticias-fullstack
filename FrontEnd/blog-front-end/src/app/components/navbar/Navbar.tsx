"use client";
import "./Navbar.css";
export default function NavBar() {
  return (
    <>
      <div className="navbarContainer">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        <h3>LOGO</h3>
        <div className="input-label">
          <label htmlFor="search">Search</label>
          <input type="text" id="search" />
        </div>
      </div>
      <div className="currency-quote">
        <span>USD: 1.00</span>
        <span>EUR: 1.00</span>
        <span>GBP: 1.00</span>
      </div>
    </>
  );
}
