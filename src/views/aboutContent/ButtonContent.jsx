import React from "react";
//import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/styles.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ButtonContent() {
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
          id="pills-Community-tab"
          data-toggle="pill"
          to="/about"
          role="tab"
          aria-controls="pills-Community"
          aria-selected="true"
        >
          <span className="active-btn">Community</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            id === "roadmap" ? `active-btn-box active` : `active-btn-box`
          }
          id="pills-Roadmap-tab"
          data-toggle="pill"
          to="/about/roadmap"
          role="tab"
          aria-controls="pills-Roadmap"
          aria-selected="false"
        >
          <span className="active-btn">Roadmap</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={id === "perks" ? `active-btn-box active` : `active-btn-box`}
          id="pills-Perks-tab"
          data-toggle="pill"
          to="/about/perks"
          role="tab"
          aria-controls="pills-Perks"
          aria-selected="false"
        >
          <span className="active-btn">Perks</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={id === "team" ? `active-btn-box active` : `active-btn-box`}
          id="pills-Team-tab"
          data-toggle="pill"
          to="/about/team"
          role="tab"
          aria-controls="pills-Team"
          aria-selected="false"
        >
          <span className="active-btn">Team</span>
        </Link>
      </li>
    </ul>
  );
}

