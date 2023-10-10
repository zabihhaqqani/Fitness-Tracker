import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";

import { deleteFoodItem, fetchFoodsData } from "../redux/actions/food";
import FoodForm from "../components/Forms/FoodForm";

const Food = () => {
  const dispatch = useDispatch();
  const {foodItems} = useSelector((state) => state.foodItems);

  useEffect(() => {
    dispatch(fetchFoodsData());
  }, [dispatch]);

  return (
    <div>
      <FoodForm />
      <div>
        {foodItems?.length > 0 ? (
          <div className="card-container">
            {foodItems?.map((food) =>
              !food ? (
                <MoonLoader
                  color="red"
                  loading
                  size={60}
                  speedMultiplier={1.5}
                />
              ) : (
                <div key={food?._id} className="card">
                  <p>
                    <strong>Name: </strong>
                    {food?.foodName}
                  </p>
                  <p>
                    <strong>Calories: </strong>
                    {food?.calories}
                  </p>
                  <p>
                    <strong>Protien: </strong>
                    {food?.protien}
                  </p>
                  <p>
                    <strong>Carbohydrates: </strong>
                    {food?.carbohydrates}
                  </p>
                  <p>
                    <strong>Fat: </strong>
                    {food?.fat}
                  </p>
                  <button onClick={() => dispatch(deleteFoodItem(food?._id))}>
                    Delete
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <h3>No Food Items!</h3>
        )}
      </div>
    </div>
  );
};

export default Food;
