import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-6 p-4">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
