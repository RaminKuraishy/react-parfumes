import { useState, useEffect } from "react";
import Button from "../../Button/button";
import "./listItem.scss";
import propTypes from "prop-types";

const ListItem = props => {
  const { like } = props;
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    if (Array.isArray(like)) {
      like.forEach(like => {
        if (like.article === props.item.article) {
          setHeart(true);
        }
      });
    }
  }, [like]);

  const addFavAndChangeColor = item => {
    props.favlike(item);
    setHeart(heart => !heart);
  };
  const addToCart = () => {
    props.setReadyToAddId(props.item);
    props.showModal();
  };

  return (
    <div style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.item.url} alt="" />
      <div className="card-body">
        <li>{props.item.name}</li>
        <li>{props.item.color}</li>
        <li>{props.item.article}</li>
        <li>{props.item.price}</li>
      </div>
      <div className="card-btn">
        {props.btnIsActive && (
          <Button
            name="Add"
            backgroundColor="#383737"
            clickHandler={addToCart}
          />
        )}
        <i
          onClick={() => addFavAndChangeColor(props.item)}
          style={
            heart
              ? { color: "red", marginLeft: "10px", fontSize: "1.5em" }
              : { color: "black", marginLeft: "10px", fontSize: "1.5em" }
          }
          className={"heart-btn fas fa-light fa-heart"}
        ></i>
      </div>
    </div>
  );
};
ListItem.propTypes = {
  item: propTypes.object,
};
export default ListItem;
