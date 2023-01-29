import "./header.scss";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className="page-header">
      <div className="header-nav">
        <NavLink className="nav-link" to="/">
          <i className="logo fa-brands fa-amazon"></i>
        </NavLink>
        <div className="header-icons">
          <NavLink className="nav-link" to="cart">
            <i className="cart fas fa-cart-plus"></i>
          </NavLink>
          <p>{props.cart}</p>
          <NavLink className="nav-link" to="favorites">
            <i className="like fas fa-heart"></i>
          </NavLink>
          <p>{props.like}</p>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  cart: propTypes.number,
  like: propTypes.number,
};
Header.defaultProps = {
  cart: 0,
  like: 0,
};

export default Header;
