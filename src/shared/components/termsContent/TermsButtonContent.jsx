import React from "react";
//import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../assets/styles/styles.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function TermsButtonContent() {
  const { id } = useParams();
  console.log("id", id);
  return (
    <ul
      className="nav nav-pills mb-3 d-flex justify-content-between align-items-center"
      id="pills-tab"
      role="tablist"
    >
      <li className="nav-item">
        <Link
          className={
            id === undefined ? `active-btn-box active` : `active-btn-box`
          }
          id="termscondition-tab"
          data-toggle="pill"
          to="/terms"
          role="tab"
          aria-controls="termscondition"
          aria-selected="true"
        >
          <span className="active-btn">Terms & Conditions</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={id === "privacypolicy" ? `active-btn-box active` : `active-btn-box`}
          id="pills-PrivacyPolicy-tab"
          data-toggle="pill"
          to="/terms/privacypolicy"
          role="tab"
          aria-controls="pills-privacypolicy"
          aria-selected="false"
        >
          <span className="active-btn">Privacy Policy</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            id === "nftlicence" ? `active-btn-box active` : `active-btn-box`
          }
          id="pills-NFTlicense-tab"
          data-toggle="pill"
          to="/terms/nftlicence"
          role="tab"
          aria-controls="pills-nftlicence"
          aria-selected="false"
        >
          <span className="active-btn">NFT License</span>
        </Link>
      </li>
    </ul>
  );
}

