import React from "react";
import AdminView from "../Administrator/AdminHomepage";
import UserView from "./UserHomepage";
import { connect } from "react-redux";

const Layout = (props) => {
  if (props.is_admin) {
    return <AdminView />;
  } else if (!props.is_admin) {
    return <UserView {...props} />;
  } else return <div>Something went wrong</div>;
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(Layout);
