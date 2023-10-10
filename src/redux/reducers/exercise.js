const initialState = {
  exercises: [],
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISES":
      return { ...state, exercises: action.payload };
    case "ADD_EXERCISE":
      return { ...state, exercises: [...state.exercises, action.payload] };
    case "DELETE_EXERCISE":
      const updatedExercises = state.exercises.filter(
        (exercise) => exercise?._id !== action.payload
      );
      return { ...state, exercises: updatedExercises };
    default:
      return state;
  }
};

export default exerciseReducer;
