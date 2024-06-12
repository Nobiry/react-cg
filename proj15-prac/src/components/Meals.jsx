function Meals({ meals, isLoading, error, addToCard }) {
  
  return (
    <ul id="meals">
      {isLoading && <p>Fetching your places...</p>}
      {error && <p className="fallback-text">{error.message}</p>}
      {!isLoading &&
        !error &&
        meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <article>
              <img src={`http://localhost:3000/${meal.image}`} alt="" />
              <div>
                <h3>{meal.name}</h3>
                <div className="meal-item-price">${meal.price}</div>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                  <button
                    className="button"
                    onClick={() => addToCard(meal)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </li>
        ))}
    </ul>
  );
}

export default Meals;
