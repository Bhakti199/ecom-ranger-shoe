export const BrandClickHandler = (event) => {
  const checked = event.target.checked;
  const typeBrand = event.target.value;
  if (checked) {
    return { type: "SET_BRAND", payload: typeBrand };
  } else {
    return { type: "UNSET_BRAND", payload: typeBrand };
  }
};
