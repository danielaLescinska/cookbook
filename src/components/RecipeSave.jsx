import React from "react";
import RecipeDetailItem from "../components/RecipeDetailItem";
import api from "../api/api";
import PropTypes from "prop-types";

export default class RecipeSave extends React.Component {
  componentDidMount() {
    const {
      directions,
      title,
      _id,
      servingCount,
      ingredients,
      preparationTime,
      sideDish,
      newRecipeDetail
    } = this.props;
    if (newRecipeDetail) {
      api
        .post(`/recipes/`, {
          title: title,
          directions: directions,
          ingredients: ingredients,
          preparationTime: preparationTime,
          servingCount: servingCount,
          sideDish: sideDish
        })
        .then(console.log);
    } else {
      api
        .post(`/recipes/${_id}`, {
          title: title,
          directions: directions,
          ingredients: ingredients,
          preparationTime: preparationTime,
          servingCount: servingCount,
          sideDish: sideDish
        })
        .then(console.log);
    }
  }

  render() {
    const {
      title,
      preparationTime,
      servingCount,
      ingredients,
      directions,
      sideDish
    } = this.props;
    return (
      <div>
        <RecipeDetailItem
          title={title}
          preparationTime={preparationTime}
          servingCount={servingCount}
          ingredients={ingredients}
          directions={directions}
          sideDish={sideDish}
        />
      </div>
    );
  }
}

RecipeDetailItem.PropTypes = {
  preparationTime: PropTypes.number.isRequired,
  directions: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  sideDish: PropTypes.string.isRequired
};
