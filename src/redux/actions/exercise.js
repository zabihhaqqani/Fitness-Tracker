import axios from "axios";

const apiEndpoint =
  "https://0b8a5fe4-5e3d-441c-b46f-bbaf321d6431-00-1lvt3jttw7xix.pike.replit.dev/api/exercises";


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
