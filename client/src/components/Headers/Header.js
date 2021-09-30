import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const logOut = () => {
    console.log(props.location.pathname);
    axios
      .get("http://localhost:3000/auth/logout", { withCredentials: true })
      .then((res) => {
        console.log("???");
        props.history.push("/auth/logIn");
      })
      .catch((err) => console.log(err));
  };
  return (
    <header>
      <Link className="header-left" to="/home">
        <img src={logo} alt="logo" />
        <div className="header-title">sequan</div>
      </Link>
      {!props.location.pathname.includes("/auth") && (
        <div className="header-right" onClick={logOut}>
          Log out
        </div>
      )}
    </header>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(withRouter(Header));
