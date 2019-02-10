import React from "react";
import RecipeDetailIngredient from "./RecipeDetailIngredient";
import PropTypes from "prop-types";

export default class IngredientEdit extends React.Component {
  render() {
    const { ingredients, isPressed, onChange } = this.props;
    return (
      <div>
        <h3>Ingrediencie: </h3>
        {ingredients &&
          ingredients.map((ingredient, index) => {
            return (
              <RecipeDetailIngredient
                key={index}
                id={index}
                ingredients={ingredient}
                isPressed={isPressed}
                onChange={onChange}
              />
            );
          })}
      </div>
    );
  }
}
IngredientEdit.PropTypes = {
  ingredients: PropTypes.array.isRequired,
  isPressed: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
