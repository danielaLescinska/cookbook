import React from "react";
import api from "../api/api";
import RecipeDetailOption from "../components/RecipeDetailOption";
import { Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import RecipeDetailItem from "../components/RecipeDetailItem";
import { Link } from "react-router-dom";

export default class RecipesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      problem: null,
      isClicked: "",
      isPressedDelete: false,
      newDirections: "",
      newServeCount: "",
      newPreparationTime: "",
      newAmountUnit: "",
      newAmount: "",
      newName: "",
      isGroup: "",
      isName: "",
      newSideDish: "",
      newTitle: "",
      isPressedTrash: "",
      newIngredients: []
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({
      isLoading: true
    });

    api.get(`/recipes/${id}`).then(({ data, problem }) => {
      this.setState({
        isLoading: false,
        data,
        problem,
        newDirections: data.directions,
        newPreparationTime: data.preparationTime,
        newServeCount: data.servingCount,
        newIngredients: data.ingredients,
        newSideDish: data.sideDish,
        newTitle: data.title
      });
    });
  }
  handleNewIngredient = () => {
    const { newAmount, newAmountUnit, newName } = this.state;
    let newOne = {
      name: newName,
      amountUnit: newAmountUnit,
      amount: newAmount
    };
    if (newName.length > 0) {
      this.setState({
        newIngredients: [...this.state.newIngredients, newOne]
      });
    }
  };
  handleIsClicked = () => {
    const { isClicked } = this.state;
    if (this.state.newTitle.length > 0) {
      this.setState({
        isClicked: !isClicked
      });
    }
  };
  handleIsPressedDel = id => {
    const { isPressedDelete, newIngredients } = this.state;

    this.setState({
      isPressedDelete: !isPressedDelete
    });

    newIngredients.splice(id, 1);
  };
  handleIsClickedNull = () => {
    this.setState({ isClicked: "" });
  };
  handleChangeTextArea = e => {
    this.setState({ newDirections: e.target.value });
  };
  handleChangeServeCount = e => {
    this.setState({ newServeCount: e.target.value });
  };
  handleChangePreparationTime = e => {
    this.setState({ newPreparationTime: e.target.value });
  };
  handleAddAmount = e => {
    this.setState({ newAmount: e.target.value });
  };
  handleAddUnit = e => {
    this.setState({ newAmountUnit: e.target.value });
  };
  handleAddName = e => {
    this.setState({ newName: e.target.value });
  };
  handleNewSideDish = e => {
    this.setState({ newSideDish: e.target.value });
  };
  handleNewTitle = e => {
    if (e.target.value.length > 0) {
      this.setState({ newTitle: e.target.value });
    } else {
      this.setState({ newTitle: "" });
    }
  };
  handleGroup = e => {
    const { newName } = this.state;
    let newOne = {
      name: newName,
      isGroup: true
    };
    if (newName.length > 0) {
      this.setState({
        newIngredients: [...this.state.newIngredients, newOne]
      });
    }
  };
  handleDelete = () => {
    api
      .delete(`/recipes/${this.state.data._id}`)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => {
        alert("OOpppss Something went wrong");
      });
  };
  handleDeleteRecipe = () => {
    const { isPressedTrash } = this.state;
    this.setState({ isPressedTrash: !isPressedTrash });
  };
  render() {
    const {
      isLoading,
      data,
      problem,
      newDirections,
      newServeCount,
      newPreparationTime,
      newIngredients,
      newSideDish,
      newTitle,
      isClicked
    } = this.state;
    if (isLoading) {
      return "Loading ...";
    }
    if (problem) {
      return problem;
    }
    if (!data) {
      return null;
    }
    const {
      _id,
      title,
      directions,
      ingredients,
      servingCount,
      sideDish,
      preparationTime
    } = data;
    if (this.state.isPressedTrash) {
      return (
        <Alert>
          Naozaj chcete vymazat recept {title} ?
          <p>
            <Button variant="primary" onClick={this.handleDelete}>
              Zmazať
            </Button>
            <Link to={"/"}>
              <Button variant="primary"> Zrusit </Button>
            </Link>
          </p>
        </Alert>
      );
    }
    if (isClicked === true || isClicked === false) {
      return (
        <div className="recipe-detail">
          <RecipeDetailOption
            _id={_id}
            title={newTitle}
            preparationTime={newPreparationTime}
            servingCount={newServeCount}
            ingredients={newIngredients}
            directions={newDirections}
            sideDish={newSideDish}
            onChange={this.handleIsClicked}
            pressedDel={this.handleIsPressedDel}
            timeChange={this.handleChangePreparationTime}
            servingChange={this.handleChangeServeCount}
            isClicked={isClicked}
            amountChange={this.handleAddAmount}
            unitChange={this.handleAddUnit}
            nameChange={this.handleAddName}
            ingredientChange={this.handleNewIngredient}
            textChange={this.handleChangeTextArea}
            sideDishChange={this.handleNewSideDish}
            titleChange={this.handleNewTitle}
            handleDelete={this.handleDelete}
            handleCancel={this.handleIsClickedNull}
            isGroup={this.handleGroup}
            deleteRecipe={this.handleDeleteRecipe}
          />
        </div>
      );
    }
    return (
      <div className="recipe-detail">
        <div>
          <p>
            <Button variant="primary" onClick={this.handleIsClicked}>
              <div className="icons">
                <FontAwesomeIcon icon={faEdit} />
              </div>
              Upraviť
            </Button>
            <Button
              variant="primary"
              onClick={this.handleDeleteRecipe}
              className="btn btn-danger"
            >
              <div className="icons">
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>
              Vymazať
            </Button>
          </p>
        </div>
        <div className="recipes-detail-item">
          <RecipeDetailItem
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
}
