import { memo, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import ListActions from "./ListActions";

const CardList = () => {
  const { shownCars } = useSelector((store) => store.cars);
  const [activeCar, setActiveCar] = useState({});
  const [selectedCars, setSelectedCars] = useState([]);

  return (
    <>
      {shownCars.length !== 0 && <ListActions selectedCars={selectedCars} />}
      <ul className="w-full flex flex-col gap-4">
        {shownCars.length
          ? shownCars.map((car) => {
              return (
                <Card
                  activeCar={activeCar}
                  setActiveCar={setActiveCar}
                  selectedCars={selectedCars}
                  setSelectedCars={setSelectedCars}
                  key={car.id}
                  item={car}
                />
              );
            })
          : "There are no cars to show"}
      </ul>
    </>
  );
};

export default memo(CardList);
