import React from "react";
import "../../assets/styles/styles.css";
import shopIconBtn from "../../assets/images/shop-icon-btn.svg";
import { Link } from "react-router-dom";
import useWindowSize from "../../shared/hooks/useWindowSize/index"

export default function HomePage() {
  const [width] = useWindowSize()

  return (
    <section
      className="banner-section d-flex align-items-end"
      style={{ height: width }}
    >
      <Link
        to="/shop"
        className="d-md-none d-flex align-items-center justify-content-center pink-bg-btn"
      >
        SHOP GODDESSES ON OS <img src={shopIconBtn} alt="shop" />
      </Link>
    </section>

  );
}
