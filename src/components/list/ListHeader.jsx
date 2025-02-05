import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ListHeader = ({ openForm }) => {
  const { shownCars } = useSelector((store) => store.cars);

  return (
    <div className="border-b-2 w-full flex justify-between items-center p-2">
      <div className="flex items-center gap-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Cars</h3>
        <span className="text-base sm:text-lg md: text-xl lg:text-2xl text-gray-500">
          {shownCars.length}
        </span>
      </div>
      <Button onClick={openForm} variant="contained" size="small">
        Add Car
      </Button>
    </div>
  );
};

ListHeader.propTypes = {
  openForm: PropTypes.func.isRequired,
};

export default ListHeader;
