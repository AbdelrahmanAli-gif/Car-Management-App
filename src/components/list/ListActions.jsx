import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCar, sortCars } from "../../slices/carSlice";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { useMessage } from "../../contexts/MessageContext";

const ListActions = ({ selectedCars }) => {
  const carsDispatch = useDispatch();
  const [sortType, setSortType] = useState("");
  const { updateMessage } = useMessage();

  const handleDelete = () => {
    selectedCars.forEach((car) => {
      carsDispatch(deleteCar(car));
    });
    updateMessage("Car(s) has been deleted successfully");
  };

  const handleSelectChange = (e) => {
    setSortType(e.target.value);
    carsDispatch(sortCars(e.target.value));
  };

  return (
    <div className="flex flex-wrap items-center justify-end w-full gap-4">
      <FormControl sx={{ m: 0, minWidth: 120 }}>
        <Select
          size="small"
          value={sortType}
          onChange={(e) => handleSelectChange(e)}
          displayEmpty
        >
          <MenuItem value="">
            <em>Sort by..</em>
          </MenuItem>
          <MenuItem value={"price"}>Sort by price</MenuItem>
          <MenuItem value={"manufactureDate"}>
            Sort by manufacture date
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        disabled={selectedCars.length === 0}
        variant="contained"
        color="error"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
};

ListActions.propTypes = {
  selectedCars: PropTypes.array.isRequired,
};

export default ListActions;
