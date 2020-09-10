import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { connect } from "react-redux";
import axios from "axios";

const Header = (props) => {
  const logOut = () => {
    axios
      .get("http://localhost:3000/auth/logOut", { withCredentials: true })
      .then(() => props.history.push("/auth/logIn"))
      .catch((err) => console.log(err));
  };
  return (
    <header>
      <Link className="header-left" to="/home">
        <img src={logo} alt="logo" />
        <div className="header-title">sequan</div>
      </Link>
      <div className="header-right" onClick={logOut}>
        Log out
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(Header);
