import "./FilterSidebar.css";
import { useFilter } from "../../Context/index";
import { BsFillCircleFill, BsX } from "react-icons/bs";
import { BrandClickHandler } from "./BrandSetter";
export const FilterSidebar = ({ openFilterBar, setOpenFilterBar }) => {
  const { state, dispatch } = useFilter();

  return (
    <form
      className={`drawer ${openFilterBar ? "drawer-open" : "drawer-close"}`}
    >
      <div className="flex drawer-header">
        <p className="clear-all-row">
          <button
            className="button clear-all"
            type="reset"
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Clear All
          </button>
          <BsX
            size={35}
            className="filterBar-cancel-btn"
            onClick={() => setOpenFilterBar(false)}
          />
        </p>
      </div>

      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">Price Range</p>

        <div className="slider-container flex-col">
          <input
            type="range"
            max={10000}
            step={1000}
            defaultValue={10000}
            className="slider"
            onChange={(event) =>
              dispatch({ type: "FILTER_BY_RANGE", payload: event.target.value })
            }
          />
        </div>
      </div>
      <div className="drawer-item-wrapper sort-by-display">
        <p className="margin-top-bottom-zero filter-heading">Sort By </p>
        <div className="sort-by-container sort-by">
          <select
            className="select-menu"
            onChange={(e) => dispatch({ type: e.target.value })}
          >
            <option value={"CLEAR_SORT_BY"}>Sort By</option>
            <option value={"PRICE_LOW_TO_HIGH"}>price- low to high</option>
            <option value={"PRICE_HIGH_TO_LOW"}>price- high to low</option>
            <option value={"SORT_ASCENDING_ORDER"}>Name (A-Z)</option>
            <option value={"SORT_DESCENDING_ORDER"}>Name (Z-A))</option>
          </select>
        </div>
      </div>

      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">Category Brands</p>
        <div>
          <ul className="list margin-top-bottom-zero flex-col sort-by-list">
            <li className="flex-row ">
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
            <li className="flex-row">
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
            <li className="flex-row ">
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
            <li className="flex-row ">
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
            <li className="flex-row ">
              <label>
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
      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">
          Sort by availability
        </p>
        <div>
          <ul className="list margin-top-bottom-zero flex-col sort-by-list">
            <li className="flex-row ">
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
            <li className="flex-row ">
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
      <div className="drawer-item-wrapper">
        <div className="filter-heading">Colors</div>
        <div className="filter-color-row">
          <span
            className="cursor"
            onClick={() => dispatch({ type: "SORT_BY_COLOR", payload: "" })}
          >
            All
          </span>
          <span>
            <BsFillCircleFill
              color="var(--cream-color)"
              className="cursor"
              onClick={() =>
                dispatch({ type: "SORT_BY_COLOR", payload: "cream" })
              }
            />
          </span>
          <span>
            <BsFillCircleFill
              color="var(--red-color)"
              className="cursor"
              onClick={() =>
                dispatch({ type: "SORT_BY_COLOR", payload: "red" })
              }
            />
          </span>
          <span>
            <BsFillCircleFill
              color="var(--black-color)"
              className="cursor"
              onClick={() =>
                dispatch({ type: "SORT_BY_COLOR", payload: "black" })
              }
            />
          </span>
          <span>
            <BsFillCircleFill
              color="var(--light-grey)"
              className="cursor"
              onClick={() =>
                dispatch({ type: "SORT_BY_COLOR", payload: "grey" })
              }
            />
          </span>
          <span>
            <BsFillCircleFill
              color="var(--purple-color)"
              className="cursor"
              onClick={() =>
                dispatch({ type: "SORT_BY_COLOR", payload: "purple" })
              }
            />
          </span>
        </div>
      </div>
      <div className="drawer-item-wrapper flex-col">
        <p className="margin-top-bottom-zero filter-heading">Ratings</p>
        <div>
          <p
            className="margin-top-bottom-zero cursor"
            onClick={() => dispatch({ type: "UNSET_RATINGS" })}
          >
            clear ratings
          </p>
          <ul className="list  flex-col sort-by-list">
            <li className="flex-row ">
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="radio-btn"
                  checked={state.sortByRatings === "fourPlus"}
                  onChange={() => dispatch({ type: "RATINGS_FOUR_PLUS" })}
                />
                4 and above
              </label>
            </li>
            <li className="flex-row ">
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="radio-btn"
                  checked={state.sortByRatings === "threeToFour"}
                  onChange={() => dispatch({ type: "RATINGS_THREE_TO_FOUR" })}
                />
                3 to 4
              </label>
            </li>
            <li className="flex-row ">
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="radio-btn"
                  checked={state.sortByRatings === "threeBelow"}
                  onChange={() => dispatch({ type: "RATINGS_THREE_BELOW" })}
                />
                3 and below
              </label>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};
