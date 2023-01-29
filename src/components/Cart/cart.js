import "./cart.scss";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Modal from "../Modal/modal";
import Button from "../Button/button";
import { del } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/form";

const Cart = props => {
  const deleteModal = useSelector(state => state.deleteModal);
  const dispatch = useDispatch();

  const [addToRemoveId, setAddToRemoveId] = useState(null);
  const [counter, setCounter] = useState(1);

  const toggleDeleteModal = () => {
    dispatch(del());

    setAddToRemoveId(null);
  };
  const toggleAdding = id => {
    setAddToRemoveId(id);
  };
  const addToReadyToAddId = id => {
    toggleAdding(() => id);
    dispatch(del());
  };

  const deleteCartFromCart = id => {
    props.setCart(cart => cart.filter(item => item.article !== id));
    dispatch(del());

    setAddToRemoveId(null);
  };

  return (
    <>
      {deleteModal && (
        <Modal
          isClose={toggleDeleteModal}
          text="Are you sure that you want to add this item?"
          header="Add"
          closeButton={true}
          actions={
            <>
              <Button
                backgroundColor={"#383737"}
                name="Ok"
                clickHandler={() => deleteCartFromCart(addToRemoveId)}
              />
              <Button
                backgroundColor={"#383737"}
                name="Cancel"
                clickHandler={toggleDeleteModal}
              />
            </>
          }
        />
      )}

      <h3 className="cart-tittle">Shopping Cart</h3>
      <ul className="page-list-cart">
        {props.cart.map(item => (
          <div key={item.article} className="h-100">
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  <div className="d-flex justify-content-between align-items-center mb-4"></div>

                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={item.url}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{item.name}</p>
                          <p className="lead fw-normal mb-2">{item.article}</p>

                          <p>
                            <span className="text-muted">Color: </span>
                            {item.color}
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <p className="mb-0">{counter}</p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{item.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger">
                            <FaTrash
                              onClick={() => addToReadyToAddId(item.article)}
                              className="delete-icon"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <Form cart={props.cart} setCart={props.setCart} />
    </>
  );
};

Cart.propTypes = {};
Cart.defaultProps = {};
export default Cart;
