const initialState = {
  foodItems:[]
}

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FOOD_ITEMS":
      return { ...state, foodItems: action.payload };
    case "ADD_FOOD_ITEM":
      return { ...state, foodItems: [...state.foodItems, action.payload] };
    case "DELETE_FOOD_ITEM":
      const updatedFoodItems = state.foodItems.filter(
        (foodItem) => foodItem?._id !== action.payload
      );
      return { ...state, foodItems: updatedFoodItems };
    default:
      return state;
  }
};
