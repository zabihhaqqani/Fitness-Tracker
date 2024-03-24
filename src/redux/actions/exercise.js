import axios from "axios";

const apiEndpoint =
  "https://fitness-tracker-backend-icl8.onrender.com/api/exercises";


export const fetchExercisesData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiEndpoint);
    const data = response.data.exercises;    
    dispatch({ type: "FETCH_EXERCISES", payload: data });
  } catch (error) {
    console.error("Error while fetching exercise data", error);
  }
};

export const addExercise = (exerciseDetails) => async (dispatch) => {
  try {
    const response = await axios.post(apiEndpoint, exerciseDetails);
    dispatch({
      type: "ADD_EXERCISE",
      payload: response.data.newExercise,
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${apiEndpoint}/${exerciseId}`);

    dispatch({
      type: "DELETE_EXERCISE",
      payload: response.data.deletedExercise._id,
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
