import "./button.scss";
import propTypes from "prop-types";

const Button = props => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ backgroundColor: props.backgroundColor }}
        onClick={props.clickHandler}
      >
        {props.name}
      </button>
    </div>
  );
};
Button.propTypes = {
  name: propTypes.string,
  backgroundColor: propTypes.string,
  clickHandler: propTypes.func,
};
Button.defaultProps = {
  name: "Button",
};
export default Button;
