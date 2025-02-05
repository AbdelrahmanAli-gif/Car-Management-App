import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import DateInput from "./DateInput";
import { useMessage } from "../../contexts/MessageContext";

const Form = ({ closeForm, state, onSubmit }) => {
  const carsDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { updateMessage } = useMessage();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // Checking for the provided state in to populate the form with car info
    defaultValues: state
      ? {
          id: state.id,
          carModel: state.carModel,
          price: state.price,
          color: state.color,
          manufactureDate: dayjs(state.manufactureDate),
        }
      : {
          id: Date.now(),
          carModel: "",
          price: "",
          color: "",
          manufactureDate: null,
        },
  });

  const handleFormSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      carsDispatch(
        onSubmit({
          ...data,
          manufactureDate: data.manufactureDate.format("YYYY-MM-DD"),
        })
      );
      closeForm();
      updateMessage(
        state
          ? "Car has been updated successfully"
          : "Car has been added successfully"
      );
    }, 1000);
  };

  // Identifying the label of the submit button
  const getLabel = () => {
    if (state) return isLoading ? "Saving" : "Save";
    return isLoading ? "Adding" : "Add";
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-gray-100 rounded-lg shadow-lg flex w-full items-center justify-between flex-wrap gap-6 p-4"
    >
      <TextInput
        name="carModel"
        control={control}
        id="carModel"
        label="Car Model *"
        rules={{
          required: "Car model is required",
          validate: (value) =>
            value.trim().length === 0 ? "Car model cannot be empty" : true,
        }}
        error={errors.carModel}
      />
      <NumberInput
        name="price"
        control={control}
        id="price"
        label="Price *"
        rules={{
          required: "Price is required",
          min: { value: 1, message: "Price must be positive" },
        }}
        error={errors.price}
      />
      <SelectInput
        name="color"
        control={control}
        id="color"
        label="Color *"
        options={["Red", "Blue", "White", "Green", "Yellow"]}
        rules={{ required: "Color is required" }}
        error={errors.color}
      />
      <DateInput
        control={control}
        name="manufactureDate"
        id="manufactureDate"
        label="Manufacture Date *"
        rules={{
          required: "Manufacture date is required",
          validate: (value) => {
            return value.isValid() ? true : "Invalid date";
          },
        }}
        error={errors.manufactureDate}
      />
      <div className="w-full flex justify-end">
        <Button
          type="submit"
          variant="contained"
          size="small"
          disabled={isLoading}
        >
          {getLabel()}
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  closeForm: PropTypes.func.isRequired,
  state: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
