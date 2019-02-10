import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//import api from "../api/api";

export default class RecipeDetailIngredient extends React.Component {
  render() {
    const { ingredients, id } = this.props;
    const { isPressed, onChange } = this.props;
    const { name, amount, amountUnit, isGroup } = ingredients;

    if (isPressed) {
      if (isGroup) {
        return (
          <p>
            <Button
              variant="secondary"
              onClick={() => onChange(id)}
              value={name}
            >
              <FontAwesomeIcon icon={faTrash} color="#C21807" />
            </Button>
            <b>{name}</b>
          </p>
        );
      }
      return (
        <p>
          <Button variant="secondary" onClick={() => onChange(id)} value={name}>
            <FontAwesomeIcon icon={faTrash} color="#C21807" />
          </Button>
          {amount} {amountUnit} {name}
        </p>
      );
    }
    if (isGroup)
      return (
        <div>
          <div className="ingredients">
            <b>{name}</b>
          </div>
        </div>
      );
    return (
      <div>
        <div className="ingredients">
          {amount} {amountUnit} {name}
        </div>
      </div>
    );
  }
}

RecipeDetailIngredient.PropTypes = {
  ingredients: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  isPressed: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isGroup: PropTypes.bool.isRequired
};
