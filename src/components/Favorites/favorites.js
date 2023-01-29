import "./favorites.scss";
import ListItem from "../List/ListItem/listItem";
const Favorites = props => {
  return (
    <>
      <h3 className="favorites-tittle">Favorites</h3>
      <ul className="page-list">
        {props.like.map(item => (
          <ListItem
            like={props.like}
            btnIsActive={false}
            key={item.article.toString()}
            item={item}
            items={props.items}
            favlike={props.favlike}
          />
        ))}
      </ul>
    </>
  );
};

export default Favorites;
