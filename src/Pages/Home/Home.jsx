import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { sliderData, settings, brands } from "./HomeUtils";
import { useFilter } from "../../Context/index";
export const Home = () => {
  const { dispatch } = useFilter();
  return (
    <div className="landing-page-home flex-col">
      <div className="video-container flex">
        <video autoPlay loop muted className="landing-video">
          <source
            src="https://res.cloudinary.com/furnhouse/video/upload/eo_037,so_017/v1649241151/e-commerce/videoplayback_k1c6pn.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-text">
          <div className="video-title">Run an extra mile</div>
          <div className="video-sub-title">
            Ranger Shoe is a destination for style seekers.
          </div>
          <Link to="/product-listing">
            <button
              className="cta-button"
              onClick={() => dispatch({ type: "CLEAR_CATEGORY" })}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="main-text">
        Curators of Ranger Shoe and associated brands designed. Ranger Shoe is a
        destination for style seekers. Located in India's fashion land Navi
        Mumbai.
      </div>
      <div className="banner-models">
        <div className="model-one">
          <img
            src="./assets/sq-5.jpg"
            alt="banner"
            className="responsive-img-model model-hover"
          />
        </div>
        <div className="model-one ">
          <img
            src="./assets/sq-1.jpg"
            alt="banner"
            className="responsive-img-model model-hover"
          />
        </div>
        <div className="banner-model-section-two">
          <div className="model-two ">
            <img
              src="./assets/banner-v-5.webp"
              alt="banner"
              className="responsive-img-model model-hover"
            />
          </div>

          <div className="model-two">
            <img
              src="./assets/kidsBanner.jpg"
              alt="banner"
              className="responsive-img-model model-hover"
            />
          </div>
        </div>
      </div>
      <div className="featured-brands">Featured Brands</div>
      <div className="brand-row-container">
        {brands.map((brand) => (
          <div className="brand" key={brand.id}>
            <Link to="/product-listing">
              <img className="responsive-img" src={brand.img} alt="brand img" />
            </Link>
          </div>
        ))}
      </div>
      <div className="must-have">
        <div className="must-have-title">Must Haves</div>
        <div className="must-have-sub-title">
          Some of our favourite picks this week.
        </div>
        <div className="must-have-container">
          <Slider {...settings}>
            {sliderData.map((slide) => (
              <div className="must-have-card-container" key={slide.id}>
                <div className="must-have-card">
                  <img
                    className="responsive-img-model img-slider"
                    src={slide.img}
                    alt="slide img"
                  />
                </div>
                <span className="must-have-details">{slide.productDetail}</span>
                <div className="slider-text">
                  <Link to="/product-listing">
                    <button
                      className="slider-button"
                      onClick={() => dispatch({ type: "CLEAR_CATEGORY" })}
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
