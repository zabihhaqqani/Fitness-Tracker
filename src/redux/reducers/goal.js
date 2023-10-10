const initialState = {
  goals: [],
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GOALS":
      return { ...state, goals: action.payload };
    case "ADD_GOAL":
      return { ...state, goals: [...state.goals, action.payload] };
    case "DELETE_GOAL":
      const updatedGoals = state.goals.filter(
        (goal) => goal?._id !== action.payload
      );
      return { ...state, goals: updatedGoals };
    default:
      return state;
  }
};
