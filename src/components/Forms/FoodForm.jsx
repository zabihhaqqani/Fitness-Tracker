import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodItem } from "../../redux/actions/food";

const FoodForm = () => {
  const dispatch = useDispatch();
  const [foodDetails, setFoodDetails] = useState({
    foodName: "",
    calories: "",
    protien: "",
    carbohydrates: "",
    fat: "",
  });

  const inputHandler = (e) => {
    setFoodDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addFoodItem(foodDetails));

    setFoodDetails({
      foodName: "",
      calories: "",
      protien: "",
      carbohydrates: "",
      fat: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h3>Food Items    </h3>

        <label htmlFor="foodName">Name:</label>
        <input
          type="text"
          placeholder="Enter Food Name"
          id="foodName"
          name="foodName"
          onChange={inputHandler}
          required
          value={foodDetails?.foodName}
        />

        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          placeholder="Enter Calories"
          id="calories"
          name="calories"
          onChange={inputHandler}
          required
          value={foodDetails?.calories}
        />

        <label htmlFor="protien">Protien:</label>
        <input
          type="number"
          placeholder="Enter Protien"
          id="protien"
          name="protien"
          onChange={inputHandler}
          required
          value={foodDetails?.protien}
        />

        <label htmlFor="carbohydrates">Carbohydrates:</label>
        <input
          type="number"
          placeholder="Enter Carbohydrates"
          id="carbohydrates"
          name="carbohydrates"
          onChange={inputHandler}
          required
          value={foodDetails?.carbohydrates}
        />

        <label htmlFor="fat">Fat:</label>
        <input
          type="number"
          placeholder="Enter Fat"
          id="fat"
          name="fat"
          onChange={inputHandler}
          required
          value={foodDetails?.fat}
        />

        <button className="btn" type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
