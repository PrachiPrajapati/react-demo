import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/styles/styles.css";

export default function PillsCommunity() {
  return (
    <div className="tab-pane show active" id="pills-Community">
      <div className="about-content">
        <div className="title-box pl-0 text-left bg-blue-mobile">
          <h1>The Goddess Community</h1>
        </div>
        <div className="content-box">
          <p>
            Tech and art industries have historically been dominated by men, and
            the NFT space is hardly more inclusive - women still make up only
            about 15% of crypto users, while female artists account for a mere
            16% of NFT sales.
          </p>
          <p>It’s time for this to change.</p>
          <p>
            As we create art and build strong communities, we carve a space of
            our own in the crypto world, allowing for a future of new
            opportunities.
          </p>
          <p>
            Everyday Goddesses is a generative project aimed at celebrating
            women in all of their diversity and authenticity. It is your digital
            avatar and membership pass to a community that aims to grow female
            influence in the NFT space, elevate artists, reach new collectors,
            and spread blockchain knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
