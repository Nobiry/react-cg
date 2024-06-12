import { useState, useEffect } from "react";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

async function fetchAvailableMeals() {
  const res = await fetch("http://localhost:3000/meals");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch available meals.");
  }

  return resData;
}

function App() {
  const [cart, setCart] = useState({
    orders: {},
    totalItems: 0,
    totalPrice: 0,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  const [checkoutOpened, setCheckoutOpened] = useState(false);
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);

      try {
        const meals = await fetchAvailableMeals();

        setMeals(meals);
      } catch (error) {
        setError({
          message:
            error.message ||
            "Could not fetch available meals, please try again later.",
        });
      }
      setIsFetching(false);
    }

    fetchMeals();
  }, []);

  function handleAddToCart(meal) {
    setCart((prevCart) => {
      const newCart = {
        ...prevCart,
      };
      const mealId = meal.id;
      const orders = newCart.orders;

      if (!orders.hasOwnProperty(mealId)) {
        orders[mealId] = {};
        orders[mealId].id = mealId;
        orders[mealId].count = 0;
        orders[mealId].name = meal.name;
        orders[mealId].price = meal.price;
      }
      ++orders[mealId].count;
      const totalPrice = (+newCart.totalPrice + +meal.price).toFixed(2);

      return {
        ...newCart,
        totalItems: ++newCart.totalItems,
        totalPrice: totalPrice,
      };
    });
  }

  function handleRemoveFromCart(meal) {
    setCart((prevCart) => {
      const newCart = {
        ...prevCart,
      };
      const mealId = meal.id;
      const orders = newCart.orders;
      if (!orders.hasOwnProperty(mealId)) {
        return;
      }

      const totalPrice = (+newCart.totalPrice - +meal.price).toFixed(2);

      --orders[mealId].count;

      if (orders[mealId].count <= 0) {
        delete orders[mealId];
      }

      return {
        ...newCart,
        totalItems: --newCart.totalItems,
        totalPrice: totalPrice,
      };
    });
  }

  function onCloseModal() {
    setModalIsOpen(false);
    setCartOpened(false);
    setCheckoutOpened(false);
  }
  function openCart() {
    setModalIsOpen(true);
    setCartOpened(true);
  }

  function openCheckout() {
    setCartOpened(false);
    setCheckoutOpened(true);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={onCloseModal}>
        {cartOpened && (
          <Cart
            cart={cart}
            closeModal={onCloseModal}
            openCheckout={openCheckout}
            addToCard={handleAddToCart}
            removeFromCard={handleRemoveFromCart}
          />
        )}

        {checkoutOpened && <Checkout closeModal={onCloseModal} />}
      </Modal>
      <Header totalMealsCount={cart.totalItems} openCart={openCart} />

      <Meals
        error={error}
        meals={meals}
        isLoading={isFetching}
        addToCard={handleAddToCart}
      />
    </>
  );
}

export default App;
