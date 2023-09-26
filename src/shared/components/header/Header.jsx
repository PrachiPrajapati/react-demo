/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import twitter from "../../../assets/images/twitter-mobile.svg";
import twitter1 from "../../../assets/images/twitter.svg";
import discord from "../../../assets/images/discord.svg";
import mobile from "../../../assets/images/discord-mobile.svg";
import mobile1 from "../../../assets/images/Subtract-mobile.svg";
import subtract from "../../../assets/images/Subtract.svg";

import "../../../assets/styles/styles.css";
import MetaMask from "../meta-mask";
import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [menu, setMenubar] = useState(false);
  const [width] = useWindowSize()

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  

  return (
    <div>
      <header
        className={sidebar ? "header-section active-menu " : "header-section"}
      >
        <div className="container-fluid pr-0 pl-0">
          <nav className="navbar navbar-expand-md  align-items-center justify-content-between">
            <Link
              className="navbar-brand "
              to="/"
              data-attribute="header-style"
            >
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            <div className="active-btn-box ">
              {/* <button
                type="button"
                className="active-btn d-md-none d-block "
              // onClick={connectHandler}
              >
                {tokenBalance === undefined
                  ? "Connect"
                  : tokenBalance?.data?.nTokenBalance}
              </button> */}
              {width < 767 && <MetaMask />}
            </div>
            <button
              className="navbar-toggler nav-btn"
              type="button"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <span className="navbar-toggler-icon ">
                <div
                  className={sidebar ? "hamburger is-active" : "hamburger"}
                  id="hamburger-1"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end position-relative align-items-center show"
              id="navbarNav"
            >
              <div className="d-md-flex d-none justify-content-end position-relative align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/about" className="nav-link active">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/terms" className="nav-link">
                      Terms
                    </Link>
                  </li>
                </ul>
                <ul className="social-media">
                  <li>
                    <Link to="/" target="_blank">
                      <img src={twitter1} alt="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" target="_blank">
                      <img src={discord} alt="discord" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" target="_blank">
                      <img src={subtract} alt="Subtract" />
                    </Link>
                  </li>
                </ul>
                {width > 767 && <MetaMask />}
                {/* <div
                  className={
                    account && click
                      ? "active-btn-box dropdown-btn-box show-dropdown d-md-block d-none"
                      : "active-btn-box dropdown-btn-box  d-md-block d-none"
                  }
                >
                  {
                    <div
                      className={
                        account && click
                          ? "dropdown active-btn show"
                          : "dropdown active-btn "
                      }
                    >
                      <button
                        className={
                          tokenBalance === undefined
                            ? "dropdown-toggle-before"
                            : "dropdown-toggle"
                        }
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={connectHandler}
                      >
                        {tokenBalance === undefined
                          ? "Connect"
                          : tokenBalance?.data?.nTokenBalance}
                      </button>

                      {click && account && (
                        <div
                          className={"dropdown-menu show"}
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" to="/nftpage">
                            My NFTs
                          </Link>
                          <Link className="dropdown-item" to="/transaction">
                            Transactions
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/"
                            onClick={disConnectHandler}
                          >
                            Disconnect
                          </Link>
                        </div>
                      )}
                    </div>
                  }
                </div> */}
              </div>
              {sidebar && (
                <div className="mobile-menu text-center d-md-none d-block">
                  <ul>
                    <li>
                      <Link to="/about" className="active">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                  </ul>
                  {menu && (
                    <>
                      <ul>
                        <li>
                          <Link to="/nftpage">My NFT</Link>
                        </li>
                        <li>
                          <Link to="/transaction">Transactions</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="/"
                          // onClick={disConnectHandler}
                          >
                            Disconnect
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}

                  <ul className="social-media">
                    <li>
                      <Link to="/">
                        <img src={twitter} target="_blank" alt="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={mobile} target="_blank" alt="discord" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={mobile1} target="_blank" alt="Subtract" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </header>
    </div>
  );
}

Header.propTypes = {
  balance: PropTypes.object,
};
