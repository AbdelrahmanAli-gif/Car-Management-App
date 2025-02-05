import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { editCar } from "../../slices/carSlice";
import { Checkbox } from "@mui/material";
import { faChevronDown, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../form/Form";

const Card = ({
  item,
  activeCar,
  setActiveCar,
  selectedCars,
  setSelectedCars,
}) => {
  const [edit, setEdit] = useState(false);
  const checkedRef = useRef(false);

  const handleExpand = () => {
    setActiveCar(activeCar.id !== item.id ? item : {});
  };

  const handleEditForm = () => {
    setEdit(true);
  };

  const handleCloseForm = () => {
    setEdit(false);
  };

  const handleCheck = (e) => {
    checkedRef.current = e.target.checked;
    let currentSelectedCars = [...selectedCars];
    if (checkedRef.current) currentSelectedCars.push(item);
    else {
      const filteredCars = currentSelectedCars.filter((car) => {
        return car.id !== item.id;
      });
      currentSelectedCars = filteredCars;
    }
    setSelectedCars(currentSelectedCars);
  };

  if (edit)
    return <Form closeForm={handleCloseForm} state={item} onSubmit={editCar} />;

  return (
    <div className="w-full flex justify-center items-center gap-2">
      <Checkbox ref={checkedRef} onChange={(e) => handleCheck(e)} />
      <li
        className={`list-card ${
          activeCar.id === item.id
            ? "h-60 overflow-y-auto md:overflow-y-hidden"
            : "h-14 md:h-16 overflow-y-hidden"
        } w-full bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col justify-between items-center`}
      >
        <div className="w-full flex justify-between items-center">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            {item.carModel}
          </h3>
          <div className="flex gap-4">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faPen}
              size="lg"
              onClick={handleEditForm}
            />
            <FontAwesomeIcon
              className={`expand-icon cursor-pointer ${
                activeCar === item.id ? "rotate-180" : "rotate-0"
              }`}
              icon={faChevronDown}
              size="lg"
              onClick={handleExpand}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-4 mt-4">
          <p>
            <span className="font-semibold">Car Model:</span> {item.carModel}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {item.price}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {item.color}
          </p>
          <p>
            <span className="font-semibold">Manufacture Date:</span>{" "}
            {item.manufactureDate}
          </p>
        </div>
      </li>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  activeCar: PropTypes.object.isRequired,
  setActiveCar: PropTypes.func.isRequired,
  selectedCars: PropTypes.array.isRequired,
  setSelectedCars: PropTypes.func.isRequired,
};

export default Card;
