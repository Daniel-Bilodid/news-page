import React from "react";
import "./news.scss";
import hero from "../../assets/image-web-3-desktop.jpg";
import mobileHero from "../../assets/image-web-3-mobile.jpg";

const News = () => {
  return (
    <main>
      <div className="news">
        <div className="news__wrapper">
          <div className="news__hero">
            <div className="news__hero-img">
              <img src={hero} alt="hero" className="news__hero-desk" />

              <img
                src={mobileHero}
                alt="mobileHero"
                className="news__mobile-hero"
              />
            </div>
            <div className="news__hero-info">
              <div className="news__info-title">
                The Bright Future of Web 3.0?
              </div>
              <div className="news__info-aside">
                <div className="news__info-subtitle">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </div>
                <div className="news__info-button">
                  <button className="btn">Read more</button>
                </div>
              </div>
            </div>
          </div>

          <div className="news__aside">
            <div className="news__aside-info">
              <div className="news__aside-title">New</div>

              <div className="news__aside-text">
                <div className="news__aside-promo">Hydrogen VS Electric</div>
                <div className="news__aside-subtext">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </div>
                <div className="news__aside-line"> </div>
              </div>

              <div className="news__aside-text">
                <div className="news__aside-promo">
                  The Downsides of AI Artistry
                </div>
                <div className="news__aside-subtext" style={{ width: "290px" }}>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </div>
                <div className="news__aside-line"> </div>
              </div>

              <div className="news__aside-text">
                <div className="news__aside-promo">
                  Is VC Funding Drying Up?
                </div>
                <div className="news__aside-subtext" style={{ width: "290px" }}>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;
