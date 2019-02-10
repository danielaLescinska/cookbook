import React from "react";
import PropTypes from "prop-types";
import RecipeDetailIngredient from "../components/RecipeDetailIngredient";
import SideDish from "./SideDish";
import PreparationTime from "./PreparationTime";
import DirectionsEdit from "./DirectionsEdit";

export default class RecipeDetailItem extends React.Component {
  render() {
    const {
      title,
      preparationTime,
      directions,
      servingCount,
      ingredients,
      sideDish
    } = this.props;
    return (
      <div className="container-fluid">
        <h2>{title}</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="preparationTime">
              <PreparationTime preparationTime={preparationTime} />
            </div>
            <div className="dish">
              <SideDish sideDish={sideDish} />
            </div>
            <p>Počet porcií : {servingCount}</p>
            <h3>Ingrediencie : </h3>
            {ingredients &&
              ingredients.map(ingredient => {
                return (
                  <RecipeDetailIngredient
                    key={ingredient._id}
                    ingredients={ingredient}
                  />
                );
              })}
          </div>
          <div className="col-md-8">
            <h3>Postup práce: </h3>
            <DirectionsEdit directions={directions} />
          </div>
        </div>
      </div>
    );
  }
}
RecipeDetailItem.PropTypes = {
  preparationTime: PropTypes.number.isRequired,
  directions: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  servingCount: PropTypes.number.isRequired,
  sideDish: PropTypes.string.isRequired
};
