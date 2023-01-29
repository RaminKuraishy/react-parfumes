import React, { useEffect } from "react";
import ListItem from "./ListItem/listItem";
import "./list.scss";
import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/actions";

const List = props => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <ul className="page-list">
      {items.map(item => (
        <ListItem
          key={item.article.toString()}
          item={item}
          setReadyToAddId={props.setReadyToAddId}
          showModal={props.showModal}
          favlike={props.favlike}
          btnIsActive={true}
          like={props.like}
        />
      ))}
    </ul>
  );
};
List.propTypes = {
  setReadyToAddId: propTypes.func,
  showModal: propTypes.func,
  favlike: propTypes.func,
};

export default List;
