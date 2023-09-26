import React from "react";
// import PillsCommunity from "../../shared/components/aboutContent/PillsCommunity";
// import Perks from "../../shared/components/aboutContent/Perks";
// import RoadMap from "../../shared/components/aboutContent/RoadMap";
// import Teams from "../../shared/components/aboutContent/Teams";
// import ButtonContent from "../../shared/components/aboutContent/ButtonContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router";
import Header from "../../shared/components/header/Header";
import "../../assets/styles/styles.css";
import TermsButtonContent from "../../shared/components/termsContent/TermsButtonContent";
import TermsConditions from "../../shared/components/termsContent/TermsCondition";
import PrivacyPolicy from "../../shared/components/termsContent/PrivacyPolicy";
import NFTLicense from "../../shared/components/termsContent/NFTLicence";

export default function Terms() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <main>
        <section className="about-page common-container terms-page">
          <div className="outer-content-box">
            <div className="inner-box d-flex flex-column justify-content-between">
              <div className="tab-content d-flex " id="pills-tabContent">
                {!id && <TermsConditions />}
                {id === "privacypolicy" && <PrivacyPolicy />}
                {id === "nftlicence" && <NFTLicense />}
              </div>
              <div className="tab-buttons justify-self-end">
                <TermsButtonContent />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
