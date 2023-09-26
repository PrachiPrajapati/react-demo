import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../assets/styles/styles.css";
import roadmap1 from "../../assets/images/roadmap-1.svg";
import roadmap2 from "../../assets/images/roadmap-2.svg";
import roadmap3 from "../../assets/images/roadmap-3.svg";
import roadmap4 from "../../assets/images/roadmap-4.svg";
import roadmap5 from "../../assets/images/roadmap-5.svg";

export default function RoadMap() {
  var settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 200,
    /* autoplay: true,
    autoplaySpeed: 10000, */
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1476,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="tab-pane show active" id="pills-Roadmap">
      <div className="about-content">
        <div className="title-box pl-0 text-left bg-blue-mobile">
          <h1>The Roadmap</h1>
        </div>
        <div className="about-content-box csb d-md-block d-none">
          <ul className="content-box">
            <li>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src={roadmap1} alt="roadmap-1" />
                </div>
                <div className="col-md-11">
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        5% of the total mint will fund scholarships for women
                        who have chosen paths related to NFTs and art. We are
                        committed to more than just a financial contribution, so
                        we will lead a mentorship program to help students learn
                        more about careers in crypto, NFTs, and art. We will
                        host educational sessions and provide real-life
                        opportunities to learn through internships at Shiny.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src={roadmap2} alt="roadmap-2" />
                </div>
                <div className="col-md-11">
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        We start the EG Launchpad to help female creators find a
                        platform and an audience. Artists will be able to apply
                        for the accelerator, and our team and community will
                        curate and vote on which to feature (min. 5 in the first
                        year). We will commission the chosen creator to compose
                        an exclusive artwork for the EG community. Holders of
                        Goddesses will get a guaranteed airdrop of this piece.
                        Our team will also hold regular strategic consultations
                        with the artist to help them plan out their rollouts and
                        overall strategy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src={roadmap3} alt="roadmap-3" />
                </div>
                <div className="col-md-11">
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        We commit to designing a collection of mythological
                        spirit animals. Think pegasus, cerberus, or kitsune.
                        These will be free to mint for Goddess holders, and
                        dropped once scaling up the ecosystem makes sense for
                        the community.
                      </li>
                      <li>
                        Launch of an educational event series with industry
                        experts covering blockchain, smart contracts, and
                        digital art. These will be open to everyone because
                        education should be available to all.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src={roadmap4} alt="roadmap-4" />
                </div>
                <div className="col-md-11">
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        Shiny’s utility token enters development, and will be
                        retroactively claimable by Goddess holders. The token
                        will unlock various perks in the Shiny ecosystem such as
                        claiming allow-list spots, or purchasing items from the
                        community vault. It will also be used as a basis for all
                        future projects that feature tokenomics, giving Goddess
                        holders a head-start.
                      </li>
                      <li>
                        Launch of Goddess networking sessions, conducted online
                        and with an annual in-person meetup.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src={roadmap5} alt="roadmap-5" />
                </div>
                <div className="col-md-11">
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        We commit to creating a collection of Goddess metaverse
                        avatars. Negotiations with metaverse platforms are
                        already underway.
                      </li>
                      <li>
                        We build partnerships with brands and other NFT projects
                        with exclusive access for our holders.
                      </li>
                      <li>
                        We work on collaborations around the Everyday Goddesses
                        brand to build brand equity for the entire community.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-slider-box d-md-none d-block">
          <ul className="content-box">
            <Slider {...settings}>
              <li>
                <div className="slider-item">
                  <div className="slider-img-box">
                    <img src={roadmap1} alt="roadmap-1" />
                  </div>
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        5% of the total mint will fund scholarships for women
                        who have chosen paths related to NFTs and art. We are
                        committed to more than just a financial contribution, so
                        we will lead a mentorship program to help students learn
                        more about careers in crypto, NFTs, and art. We will
                        host educational sessions and provide real-life
                        opportunities to learn through internships at Shiny.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-item">
                  <div className="slider-img-box">
                    <img src={roadmap2} alt="roadmap-2" />
                  </div>
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        We start the EG Launchpad to help female creators find a
                        platform and an audience. Artists will be able to apply
                        for the accelerator, and our team and community will
                        curate and vote on which to feature (min. 5 in the first
                        year). We will commission the chosen creator to compose
                        an exclusive artwork for the EG community. Holders of
                        Goddesses will get a guaranteed airdrop of this piece.
                        Our team will also hold regular strategic consultations
                        with the artist to help them plan out their rollouts and
                        overall strategy.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-item">
                  <div className="slider-img-box">
                    <img src={roadmap3} alt="roadmap-3" />
                  </div>
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        We commit to designing a collection of mythological
                        spirit animals. Think pegasus, cerberus, or kitsune.
                        These will be free to mint for Goddess holders, and
                        dropped once scaling up the ecosystem makes sense for
                        the community.
                      </li>
                      <li>
                        Launch of an educational event series with industry
                        experts covering blockchain, smart contracts, and
                        digital art. These will be open to everyone because
                        education should be available to all.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-item">
                  <div className="slider-img-box">
                    <img src={roadmap4} alt="roadmap-4" />
                  </div>
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        Shiny’s utility token enters development, and will be
                        retroactively claimable by Goddess holders. The token
                        will unlock various perks in the Shiny ecosystem such as
                        claiming allow-list spots, or purchasing items from the
                        community vault. It will also be used as a basis for all
                        future projects that feature tokenomics, giving Goddess
                        holders a head-start.
                      </li>
                      <li>
                        Launch of Goddess networking sessions, conducted online
                        and with an annual in-person meetup.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-item">
                  <div className="slider-img-box">
                    <img src={roadmap5} alt="roadmap-5" />
                  </div>
                  <div className="content">
                    <ul className="roadmap-content">
                      <li>
                        ☐We commit to creating a collection of Goddess metaverse
                        avatars. Negotiations with metaverse platforms are
                        already underway.
                      </li>
                      <li>
                        We build partnerships with brands and other NFT projects
                        with exclusive access for our holders.
                      </li>
                      <li>
                        We work on collaborations around the Everyday Goddesses
                        brand to build brand equity for the entire community.
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}
