import "./FilterSidebar.css";
import { AiFillStar } from "react-icons/ai";
import { useFilter } from "../../Context/index";

export const FilterSidebar = () => {
  const { state, dispatch } = useFilter();

  const BrandClickHandler = (event) => {
    const checked = event.target.checked;
    const typeBrand = event.target.value;
    if (checked) {
      return { type: "SET_BRAND", payload: typeBrand };
    } else {
      return { type: "UNSET_BRAND", payload: typeBrand };
    }
  };
  return (
    <form className="drawer">
      <div className="flex drawer-header">
        <p>FILTER</p>
        <p>
          <button
            className="button"
            type="reset"
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
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
            onChange={(event) =>
              dispatch({ type: "FILTER_BY_RANGE", payload: event.target.value })
            }
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
                <input
                  type="radio"
                  name="price-sort"
                  checked={state.sortByPrice === "lowToHigh"}
                  onChange={() => dispatch({ type: "PRICE_LOW_TO_HIGH" })}
                />
                Price- low to high
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                {" "}
                <input
                  type="radio"
                  name="price-sort"
                  checked={state.sortByPrice === "highToLow"}
                  onChange={() => dispatch({ type: "PRICE_HIGH_TO_LOW" })}
                />
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
                <input
                  type="checkbox"
                  name="inStock"
                  className="checkbox"
                  checked={state.includeOutOfStock === "include"}
                  onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
                />
                Include out of stock
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="checkbox"
                  name="fastDelivery"
                  className="checkbox"
                  checked={state.includeFastDelivery === "include"}
                  onChange={() => dispatch({ type: "INCLUDE_FAST_DELIVERY" })}
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
          <p
            className="margin-top-bottom-zero"
            onClick={() => dispatch({ type: "UNSET_RATINGS" })}
          >
            {" "}
            clear ratings
          </p>
          <ul className="list  flex-col sort-by-list">
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={state.sortByRatings === "fourPlus"}
                  onChange={() => dispatch({ type: "RATINGS_FOUR_PLUS" })}
                />
                4 <AiFillStar className="star-filter" /> and above
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={state.sortByRatings === "threeToFour"}
                  onChange={() => dispatch({ type: "RATINGS_THREE_TO_FOUR" })}
                />
                3 <AiFillStar className="star-filter" />
                to 4
                <AiFillStar className="star-filter" />
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="radio"
                  name="rating"
                  checked={state.sortByRatings === "threeBelow"}
                  onChange={() => dispatch({ type: "RATINGS_THREE_BELOW" })}
                />
                3 <AiFillStar className="star-filter" /> and below
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
                <input
                  type="checkbox"
                  className="checkbox"
                  value="Puma"
                  onChange={(event) => dispatch(BrandClickHandler(event))}
                />
                Puma
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  value="Adidas"
                  onChange={(event) => dispatch(BrandClickHandler(event))}
                />
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
                  onChange={(event) => dispatch(BrandClickHandler(event))}
                />
                Nike
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                <input
                  type="checkbox"
                  value="Reebok"
                  className="checkbox"
                  onChange={(event) => dispatch(BrandClickHandler(event))}
                />
                Reebok
              </label>
            </li>
            <li className="flex-row sort-by-item">
              <label>
                {" "}
                <input
                  type="checkbox"
                  value="Hrx"
                  className="checkbox"
                  onChange={(event) => dispatch(BrandClickHandler(event))}
                />
                HRX by Hritik Roshan
              </label>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};
