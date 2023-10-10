import axios from "axios";

const apiEndpoint =
  "https://fitness-tracker-api.zabihhaqqani1.repl.co/api/food";

export const fetchFoodsData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiEndpoint);
    const data = response.data.foodItems;
    dispatch({ type: "FETCH_FOOD_ITEMS", payload: data });
  } catch (error) {
    console.error("Error while fetching food data", error);
  }
};

export const addFoodItem = (foodDetails) => async (dispatch) => {
  try {
    const response = await axios.post(apiEndpoint, foodDetails);
    dispatch({
      type: "ADD_FOOD_ITEM",
      payload: response.data.newFoodItem,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteFoodItem = (foodId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${apiEndpoint}/${foodId}`);
    dispatch({
      type: "DELETE_FOOD_ITEM",
      payload: response.data.deletedFoodItem._id,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
