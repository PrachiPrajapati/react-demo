import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/styles/styles.css";
import paul from "../../../assets/images/Paul.svg";
import vidya from "../../../assets/images/Vidya.svg";
import luka from "../../../assets/images/Luka.svg";
import jessi from "../../../assets/images/Jessi.svg";
import maria from "../../../assets/images/Maria.svg";
import aleksa from "../../../assets/images/Aleksa.svg";
import camille from "../../../assets/images/Camille.svg";
import twitter from "../../../assets/images/twitter.svg";

export default function Teams() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1476,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
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
    <div className="tab-pane show active" id="pills-Team">
      <div className="about-content">
        <div className="title-box mb-3 pl-0 text-left bg-blue-mobile">
          <h1>The Team</h1>
        </div>
        <div className="about-content-boxs">
          <div className="slider-section">
            <Slider {...settings}>
              <div>
                <div className="team-wrapper ">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={maria} alt="maria" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div className="team-info-data">
                        <p>
                          A digital entrepreneur & leading producer in the world
                          of luxury brands, Maria has been managing teams and
                          working with artists from across the globe to create
                          innovative campaigns in collaboration with brands like
                          Chanel, Balenciaga, LV, Gucci. Responsible for Shiny’s
                          strategic vision & creative direction.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Maria</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={vidya} alt="vidya" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          A 3D artist who plays on cultural and gender themes to
                          raise awareness of women rights and representation.
                          Previously worked on Disney Raya and the Last Dragon,
                          Frozen II, and Ralph Breaks the Internet. Responsible
                          for the art and creative direction of Everyday
                          Goddesses.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Vidya</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={luka} alt="Luka" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          With his experience in digital marketing, UX, and
                          development, Luka takes charge of innovation and
                          technology at Shiny. His past work with online trading
                          and investment platforms has given him a deep
                          understanding of financial markets and first-hand
                          experience in the trading of digital assets.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Luka</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={aleksa} alt="Aleksa" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          Semi-pro streamer turned pro community manager. He
                          maintains the Discord server and develops community
                          initiatives. Previously worked in media production and
                          PR. DM him for 1v1s.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Aleksa</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={jessi} alt="Jessi" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          Jessica is an Anime, Gaming, Art, Music and Crypto/NFT
                          lover. She honorably defends the Discord from evil and
                          keeps the atmosphere light and engaging. Though she’s
                          studying business, Jessi is a budding NFT artist in
                          her own right.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Jessi</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={camille} alt="Camille" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          A UX Researcher with a background in Learning Design,
                          Camille is always looking for data to understand any
                          challenge at hand. As an advocate for users, she
                          studies their needs and pain-points to unearth human
                          insights and design products that provide real value
                          to them.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Camille</h4>
                </div>
              </div>
              <div>
                <div className="team-wrapper">
                  <div className="team-infobox position-relative">
                    <div className="image-box">
                      <img src={paul} alt="Paul" />
                    </div>
                    <div className="team-info d-block text-center">
                      <div
                        style={{
                          maxHeight: "100%",
                          overflowY: "auto",
                        }}
                      >
                        <p>
                          Our weekend Mod, Paul is an avid Crypto and NFT
                          enthusiast. With his experience working as a
                          university counselor and hunger for learning, Paul
                          helps our Discord members have constructive
                          conversations and build meaningful connections.
                        </p>
                        <ul className="social-media pl-0 m-0 justify-content-center">
                          <li>
                            <a href="/">
                              <img
                                src={twitter}
                                target="_blank"
                                alt="twitter"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-center mt-3">Paul</h4>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
