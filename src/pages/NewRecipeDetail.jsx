import React from "react";
import RecipeSave from "../components/RecipeSave";
import RecipeDetailEditOption from "../components/RecipeDetailEditOption";

export default class NewRecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "Nový recept",
      directions: "",
      preparationTime: "",
      ingredients: [],
      servingCount: "",
      sideDish: "",
      isClicked: true,
      isNewRecipe: false,
      isPressedDelete: false,
      amount: "",
      amountUnit: "",
      name: ""
    };
  }
  handleNewTitle = e => {
    if (e.target.value.length > 0) {
      this.setState({ newTitle: e.target.value });
    } else {
      this.setState({ newTitle: "" });
    }
  };
  handleisClicked = () => {
    const { isClicked, newTitle, isNewRecipe } = this.state;
    if (newTitle.length > 0) {
      this.setState({ isClicked: !isClicked, isNewRecipe: !isNewRecipe });
    }
  };
  handleIsPressedDel = id => {
    const { isPressedDelete, ingredients } = this.state;

    this.setState({
      isPressedDelete: !isPressedDelete
    });

    ingredients.splice(id, 1);
  };
  handleNewIngredient = () => {
    const { amount, amountUnit, name } = this.state;
    let newOne = {
      name: name,
      amountUnit: amountUnit,
      amount: amount
    };
    if (name.length > 0) {
      this.setState({
        ingredients: [...this.state.ingredients, newOne]
      });
    }
  };
  backToList = () => {
    this.props.history.push("/");
  };
  handleChangeTextArea = e => {
    this.setState({ directions: e.target.value });
  };
  handleChangeServeCount = e => {
    this.setState({ servingCount: e.target.value });
  };
  handleChangePreparationTime = e => {
    this.setState({ preparationTime: e.target.value });
  };
  handleAddAmount = e => {
    this.setState({ amount: e.target.value });
  };
  handleAddUnit = e => {
    this.setState({ amountUnit: e.target.value });
  };
  handleAddName = e => {
    this.setState({ name: e.target.value });
  };
  handleNewSideDish = e => {
    this.setState({ sideDish: e.target.value });
  };
  handleGroup = e => {
    const { name } = this.state;
    let newOne = {
      name: name,
      isGroup: true
    };
    if (name.length > 0) {
      this.setState({
        ingredients: [...this.state.ingredients, newOne]
      });
    }
  };
  render() {
    const {
      newTitle,
      directions,
      preparationTime,
      ingredients,
      sideDish,
      servingCount,
      isClicked,
      isNewRecipe
    } = this.state;
    if (!isClicked) {
      return (
        <RecipeSave
          title={newTitle}
          directions={directions}
          preparationTime={preparationTime}
          ingredients={ingredients}
          sideDish={sideDish}
          servingCount={servingCount}
          newRecipeDetail={isNewRecipe}
        />
      );
    }
    return (
      <div className="recipe-detail">
        <RecipeDetailEditOption
          onChange={this.handleisClicked}
          preparationTime={preparationTime}
          servingCount={servingCount}
          directions={directions}
          ingredients={ingredients}
          timeChange={this.handleChangePreparationTime}
          servingChange={this.handleChangeServeCount}
          pressedDel={this.handleIsPressedDel}
          title={newTitle}
          isClicked={isClicked}
          amountChange={this.handleAddAmount}
          unitChange={this.handleAddUnit}
          nameChange={this.handleAddName}
          ingredientChange={this.handleNewIngredient}
          textChange={this.handleChangeTextArea}
          sideDishChange={this.handleNewSideDish}
          titleChange={this.handleNewTitle}
          handleCancel={this.backToList}
          isGroup={this.handleGroup}
        />
      </div>
    );
  }
}
