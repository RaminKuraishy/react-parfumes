import Button from "../Button/button";
import List from "../List/list";
import Modal from "../Modal/modal";

const MainPage = props => {
  const { modal1, toggleModal, addToCart, toggleLike, addToReadyId, like } =
    props;
  return (
    <>
      {modal1 && (
        <Modal
          isClose={toggleModal}
          text="Are you sure that you want to add this item?"
          header="Add"
          closeButton={true}
          actions={
            <>
              <Button
                backgroundColor={"#383737"}
                name="Ok"
                clickHandler={addToCart}
              />
              <Button
                backgroundColor={"#383737"}
                name="Cancel"
                clickHandler={toggleModal}
              />
            </>
          }
        />
      )}{" "}
      <List
        showModal={toggleModal}
        favlike={toggleLike}
        setReadyToAddId={addToReadyId}
        like={like}
      />
    </>
  );
};
export default MainPage;
