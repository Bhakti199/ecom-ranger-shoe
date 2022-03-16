import "./FilterSidebar.css";
import { AiFillStar } from "react-icons/ai";
export const FilterSidebar = () => {
  return (
    <form className="drawer">
      <div className="flex drawer-header">
        <p>FILTER</p>
        <p>
          <button className="clear-btn button" type="reset">
            Clear All
          </button>
        </p>
      </div>
      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">PRICE</p>

        <div className="slider-container flex-col">
          <input
            type="range"
            max={10000}
            step={1000}
            defaultValue={5000}
            className="slider"
          />
        </div>
      </div>
      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">SORT BY</p>
        <p className="margin-top-bottom-zero">Clear Price</p>
        <div>
          <ul className="list margin-top-bottom-zero flex-col sort-by-list">
            <li className="flex-row sort-by-item">
              <label>
                <input type="radio" name="price-sort" />
                Price- low to high
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                {" "}
                <input type="radio" name="price-sort" />
                Price- high to low
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">
          SORT BY AVAILABILITY
        </p>
        <div>
          <ul className="list margin-top-bottom-zero flex-col sort-by-list">
            <li className="flex-row sort-by-item">
              <label>
                <input type="checkbox" name="inStock" className="checkbox" />
                Include out of stock
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="checkbox"
                  name="fastDelivery"
                  className="checkbox"
                />
                Fast Delivery only
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">RATING</p>
        <div>
          <p className="margin-top-bottom-zero"> clear ratings</p>
          <ul className="list  flex-col sort-by-list">
            <li className="flex-row sort-by-item">
              <label>
                <input type="radio" name="rating" />4{" "}
                <AiFillStar className="star-filter" /> and above
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input type="radio" name="rating" />3{" "}
                <AiFillStar className="star-filter" />
                to 4
                <AiFillStar className="star-filter" />
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input type="radio" name="rating" />3{" "}
                <AiFillStar className="star-filter" /> and below
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">CATEGORY BRAND</p>
        <div>
          <ul className="list margin-top-bottom-zero flex-col sort-by-list">
            <li className="flex-row sort-by-item">
              <label>
                <input type="checkbox" className="checkbox" value="Puma" />
                Puma
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input type="checkbox" className="checkbox" value="Adidas" />
                Adidas
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="checkbox"
                  name="reebok"
                  value="Nike"
                  className="checkbox"
                />
                Nike
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input type="checkbox" value="Reebok" className="checkbox" />
                Reebok
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                {" "}
                <input type="checkbox" value="Hrx" className="checkbox" />
                HRX by Hritik Roshan
              </label>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};
