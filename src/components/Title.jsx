import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <h1 className="my-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
