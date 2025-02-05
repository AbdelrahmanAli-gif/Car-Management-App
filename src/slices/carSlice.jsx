import { createSlice } from "@reduxjs/toolkit";

const savedData = localStorage.getItem("cars");

const initialState = {
  cars: savedData ? JSON.parse(savedData) : [],
  shownCars: savedData ? JSON.parse(savedData) : [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload);
      state.shownCars.push(action.payload);
      localStorage.setItem("cars", JSON.stringify(state.cars));
    },
    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
      state.shownCars = state.shownCars.filter(
        (car) => car.id !== action.payload.id
      );
      localStorage.setItem("cars", JSON.stringify(state.cars));
    },
    editCar(state, action) {
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
      state.shownCars = state.shownCars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
      localStorage.setItem("cars", JSON.stringify(state.cars));
    },
    filterCars(state, action) {
      state.shownCars = state.cars.filter((car) =>
        car.carModel.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortCars(state, action) {
      state.shownCars = [...state.shownCars].sort((a, b) => {
        if (action.payload === "price")
          return Number(a.price) - Number(b.price);
        if (action.payload === "manufactureDate")
          return new Date(a.manufactureDate) - new Date(b.manufactureDate);
      });
    },
  },
});

export const { addCar, deleteCar, editCar, filterCars, sortCars } =
  carsSlice.actions;
export default carsSlice.reducer;
