import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addCar } from "../../slices/carSlice";
import ListHeader from "./ListHeader";
import Form from "../form/Form";
import CardList from "./CardList";

const List = () => {
  const { shownCars } = useSelector((store) => store.cars);
  const [isFormOpen, setIsFormOpen] = useState(shownCars.length === 0);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <p className="text-bold text-lg sm:text-3xl">Loading...</p>;
  }

  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 items-center justify-center gap-6">
      <ListHeader openForm={handleOpenForm} />
      {isFormOpen && <Form closeForm={handleCloseForm} onSubmit={addCar} />}
      <CardList />
    </div>
  );
};

export default List;
