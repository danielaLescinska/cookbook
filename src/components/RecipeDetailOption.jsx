import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import RecipeSave from "./RecipeSave";
import RecipeDetailEditOption from "./RecipeDetailEditOption";

export default class RecipeDetailOption extends React.Component {
  render() {
    const {
      isClicked,
      _id,
      title,
      ingredients,
      preparationTime,
      servingCount,
      directions,
      sideDish,
      onChange,
      timeChange,
      servingChange,
      pressedDel,
      amountChange,
      nameChange,
      unitChange,
      ingredientChange,
      sideDishChange,
      textChange,
      handleCancel,
      isGroup,
      deleteRecipe,
      titleChange
    } = this.props;

    if (isClicked === false) {
      return (
        <div>
          <div>
            <p>
              <Button variant="primary" onClick={onChange}>
                <div className="icons">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                Upraviť
              </Button>
              <Button
                variant="primary"
                onClick={deleteRecipe}
                className="btn btn-danger"
              >
                <div className="icons">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
                Vymazať
              </Button>
            </p>
          </div>
          <div>
            <RecipeSave
              _id={_id}
              title={title}
              preparationTime={preparationTime}
              servingCount={servingCount}
              ingredients={ingredients}
              directions={directions}
              sideDish={sideDish}
            />
          </div>
        </div>
      );
    }
    return (
      <RecipeDetailEditOption
        onChange={onChange}
        preparationTime={preparationTime}
        servingCount={servingCount}
        directions={directions}
        sideDish={sideDish}
        ingredients={ingredients}
        timeChange={timeChange}
        servingChange={servingChange}
        pressedDel={pressedDel}
        title={title}
        isClicked={isClicked}
        amountChange={amountChange}
        unitChange={unitChange}
        nameChange={nameChange}
        ingredientChange={ingredientChange}
        textChange={textChange}
        sideDishChange={sideDishChange}
        titleChange={titleChange}
        handleCancel={handleCancel}
        isGroup={isGroup}
      />
    );
  }
}
