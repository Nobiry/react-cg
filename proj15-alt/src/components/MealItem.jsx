import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <div className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </div>
          <p className="meal-item-description">{meal.description}</p>
          <div className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default MealItem;
