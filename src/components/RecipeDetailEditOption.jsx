import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ServeEdit from "../components/ServeEdit";
import TimeEdit from "../components/TimeEdit";
import IngredientEdit from "../components/IngredientEdit";
import AmountAdd from "../components/AmountAdd";
import AmountUnitAdd from "../components/AmountUnitAdd";
import RecipeEdit from "../components/RecipeEdit";
import TitleEdit from "./TitleEdit";
import DirectionsEdit from "./DirectionsEdit";
import AddGroup from "./AddGroup";

export default class RecipeDetailEditOption extends React.Component {
  render() {
    const {
      onChange,
      preparationTime,
      servingCount,
      ingredients,
      directions,
      timeChange,
      title,
      isClicked,
      servingChange,
      pressedDel,
      amountChange,
      nameChange,
      unitChange,
      ingredientChange,
      sideDishChange,
      textChange,
      sideDish,
      titleChange,
      isGroup,
      handleCancel
    } = this.props;
    return (
      <div>
        <p>
          <Button
            variant="primary"
            onClick={onChange}
            className="btn btn-success"
          >
            <div className="icons">
              <FontAwesomeIcon icon={faSave} />
            </div>
            Uložiť
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Zrušiť
          </Button>
        </p>
        <div className="container-fluid">
          {" "}
          <div className="row">
            <h2>{title}</h2>
            <TitleEdit
              label="Pridajte názov"
              onChange={titleChange}
              value={title}
            />
            <div className="col-md-2">
              <h3>Základné údaje</h3>
              <TimeEdit
                label="Doba prípravy"
                onChange={timeChange}
                value={preparationTime}
              />
              <ServeEdit
                label="Počet porcií"
                onChange={servingChange}
                value={servingCount}
                min={1}
              />
              <AmountAdd
                label="Pridaj prílohu"
                onChange={sideDishChange}
                value={sideDish}
              />
            </div>
            <div className="col-md-5">
              <IngredientEdit
                ingredients={ingredients}
                isPressed={isClicked}
                onChange={pressedDel}
              />
              <ServeEdit
                label="Pridajte množstvo"
                min={0}
                onChange={amountChange}
              />
              <AmountUnitAdd
                label="Pridajte jednotku"
                placeholder="Jednotka"
                onChange={unitChange}
              />
              <AmountAdd
                label="Pridajte názov"
                placeholder="Nazov"
                onChange={nameChange}
              />
              <Button variant="primary" onClick={ingredientChange}>
                <div className="icons">
                  <FontAwesomeIcon icon={faPlusCircle} />
                </div>
                Pridaj
              </Button>
              <AddGroup inputChange={nameChange} onChange={isGroup} />
            </div>
            <div className="col-md-5">
              <RecipeEdit onChange={textChange} text={directions} />
            </div>
          </div>
          <div>
            <h3>Náhľad postupu:</h3>
            <DirectionsEdit directions={directions} />
          </div>
        </div>
      </div>
    );
  }
}
