import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuid } from "uuid";
import "./Home.css";

export const Home = () => {
  const brands = [
    {
      id: uuid(),
      img: "./assets/adidaslogo.jpg",
    },
    {
      id: uuid(),
      img: "./assets/hrx.png",
    },
    {
      id: uuid(),
      img: "./assets/nikelogo.png",
    },
    {
      id: uuid(),
      img: "./assets/reebok.png",
    },
    {
      id: uuid(),
      img: "./assets/pumalogo.png",
    },
  ];

  const sliderData = [
    {
      id: uuid(),
      img: "./assets/banner-v-4.webp",
    },

    {
      id: uuid(),
      img: "./assets/banner-v-2.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-3.webp",
    },

    {
      id: uuid(),
      img: "./assets/banner-v-5.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-6.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-7.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-8.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-1.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-9.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-10.webp",
    },
    {
      id: uuid(),
      img: "./assets/banner-v-11.webp",
    },
  ];

  const settings = {
    className: "center must-have-row-container",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          <button className="cta-button">Shop Now</button>
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
            alt=""
            srcset=""
            className="responsive-img-model model-hover"
          />
        </div>
        <div className="model-one ">
          <img
            src="./assets/sq-1.jpg"
            alt=""
            srcset=""
            className="responsive-img-model model-hover"
          />
        </div>
        <div className="banner-model-section-two">
          <div className="model-two ">
            <img
              src="./assets/banner-v-5.webp"
              alt=""
              srcset=""
              className="responsive-img-model model-hover"
            />
          </div>

          <div className="model-two">
            <img
              src="./assets/banner-v-7.webp"
              alt=""
              srcset=""
              className="responsive-img-model model-hover"
            />
            <h1 className="model-hover-text">Sale</h1>
          </div>
        </div>
      </div>
      <h1 className="featured-brands">Featured Brands</h1>
      <div className="brand-row-container">
        {brands.map((brand) => (
          <div className="brand" key={brand.id}>
            <img className="responsive-img" src={brand.img} alt="brand img" />
          </div>
        ))}
      </div>
      <div className="must-have">
        <div className="must-have-title">Must Have</div>
        <div className="must-have-sub-title">
          Some of our favourite picks this week.
        </div>
        <div className="must-have-container">
          <Slider {...settings}>
            {sliderData.map((brand) => (
              <div className="must-have-card-container">
                <div className="must-have-card" key={brand.id}>
                  <img
                    className="responsive-img-model img-slider"
                    src={brand.img}
                    alt="brand img"
                  />
                </div>
                <div className="slider-text">
                  <button className="slider-button">Shop Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
