import { useState, useEffect } from "react";
import "./app.scss";
import Header from "../Header/header";
import Favorites from "../Favorites/favorites";
import Cart from "../Cart/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../redux/actions";

const App = props => {
  const modal1 = useSelector(state => state.modal1);
  const dispatch = useDispatch();

  const [like, setLike] = useState(() => {
    const saved = localStorage.getItem("like");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  }, []);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  }, []);

  const [readyToAddId, setReadyToAddId] = useState(null);

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    const findEl = cart.find(item => {
      return item.article === readyToAddId.article;
    });
    if (!findEl) {
      setCart(cart => [...cart, readyToAddId]);
      dispatch(open());
    } else {
      dispatch(open());
    }
  };
  const addToReadyId = id => {
    setReadyToAddId(id);
  };

  const toggleModal = () => {
    dispatch(open());
  };
  const toggleLike = product => {
    let flag = false;
    like.forEach(element => {
      if (element.article === product.article) {
        flag = true;
      }
    });
    if (flag) {
      setLike(like => like.filter(item => item.article !== product.article));
    } else {
      setLike(like => [...like, product]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header like={like.length} cart={cart.length} />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                modal1={modal1}
                toggleModal={toggleModal}
                addToCart={addToCart}
                toggleLike={toggleLike}
                addToReadyId={addToReadyId}
                like={like}
                item={props.item}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites like={like} favlike={toggleLike} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                isClose={props.isClose}
                setCart={setCart}
                item={props.item}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
