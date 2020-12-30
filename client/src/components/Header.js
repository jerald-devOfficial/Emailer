import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import M from "materialize-css/dist/js/materialize.min.js";

class Header extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      let sidenav = document.querySelector(".sidenav");
      M.Sidenav.init(sidenav, {});
    });
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              Emailer
            </Link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          {this.renderContent()}
        </ul>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
