export const filterManagement = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "CLEAR_CATEGORY":
      return { ...state, category: "" };
    case "FILTER_BY_RANGE":
      return {
        ...state,
        sortByRange: action.payload,
      };
    case "PRICE_LOW_TO_HIGH": {
      return {
        ...state,
        sortByOrder: "lowToHigh",
      };
    }

    case "PRICE_HIGH_TO_LOW": {
      return {
        ...state,
        sortByOrder: "highToLow",
      };
    }
    case "SORT_ASCENDING_ORDER": {
      return {
        ...state,
        sortByOrder: "SORT_ASCENDING_ORDER",
      };
    }
    case "SORT_DESCENDING_ORDER": {
      return {
        ...state,
        sortByOrder: "SORT_DESCENDING_ORDER",
      };
    }
    case "UNSET_PRICE":
      return {
        ...state,
        sortByPrice: "",
      };
    case "INCLUDE_OUT_OF_STOCK": {
      return {
        ...state,
        includeOutOfStock:
          state.includeOutOfStock === "include" ? "exclude" : "include",
      };
    }

    case "INCLUDE_FAST_DELIVERY": {
      return {
        ...state,
        includeFastDelivery:
          state.includeFastDelivery === "include" ? "exclude" : "include",
      };
    }
    case "SORT_BY_COLOR":
      return {
        ...state,
        sortByColor: action.payload,
      };
    case "RATINGS_FOUR_PLUS":
      return {
        ...state,
        sortByRatings: "fourPlus",
      };

    case "RATINGS_THREE_TO_FOUR":
      return {
        ...state,
        sortByRatings: "threeToFour",
      };

    case "RATINGS_THREE_BELOW":
      return {
        ...state,
        sortByRatings: "threeBelow",
      };

    case "UNSET_RATINGS":
      return {
        ...state,
        sortByRatings: "",
      };
    case "SET_BRAND":
      return {
        ...state,
        sortByBrand: [...state.sortByBrand, action.payload],
      };
    case "UNSET_BRAND":
      return {
        ...state,
        sortByBrand: state.sortByBrand.filter(
          (brandName) => brandName !== action.payload
        ),
      };
    case "CLEAR_SORT_BY":
      return {
        ...state,
        sortByPrice: "",
        sortByOrder: "",
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortByRange: 0,
        sortByBrand: [],
        includeOutOfStock: "include",
        includeFastDelivery: "",
        sortByRatings: "",
      };
    default:
      return state;
  }
};
