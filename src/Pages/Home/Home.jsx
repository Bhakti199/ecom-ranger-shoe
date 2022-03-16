import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="landing-page flex-col">
      <div className="search-bar-container flex">
        <div className="search flex-row">
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
          <input
            className="search-input"
            type="text"
            placeholder="Search for brands and more"
          />
        </div>
      </div>

      <div className="landing-page-img">
        <Link to="/product-listing">
          <img
            src="./assets/main-img.png"
            alt="landing-page"
            className="responsive-img"
          />
        </Link>
      </div>

      <h1 className="deal-heading">Deals of the day</h1>

      <div className="deals-of-the-day flex-row-center">
        <div className="deal-img">
          <Link to="/product-listing">
            <img
              className="responsive-img"
              src="./assets/deal-1.jpg"
              alt="product"
            />
            <p className="deal-text">upto 20% off</p>
          </Link>
        </div>

        <div className="deal-img">
          <Link to="/product-listing">
            <img
              className="responsive-img"
              src="./assets/deal-2.jpg"
              alt="product"
            />
            <p className="deal-text">upto 33% off</p>
          </Link>
        </div>

        <div className="deal-img">
          <Link to="/product-listing">
            <img
              className="responsive-img"
              src="./assets/deal-3.jpg"
              alt="product"
            />
            <p className="deal-text">upto 50% off</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
