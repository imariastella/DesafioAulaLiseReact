import { PropTypes } from "prop-types";
const Texto = ({ textPrimary, textSecond }) => {
  Texto.propTypes = {
    textPrimary: PropTypes.string,
    textSecond: PropTypes.string,
  };
  return (
    <div>
      {textPrimary}
      {textSecond}
    </div>
  );
};
export { Texto };
