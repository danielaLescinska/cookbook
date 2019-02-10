import React from "react";
import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

export default class RecipeEdit extends React.Component {
  render() {
    const { onChange, text } = this.props;
    return (
      <div>
        <h3>Postup:</h3>
        <p>
          <FormControl componentClass="textarea" rows={22} onChange={onChange}>
            {text}
          </FormControl>
        </p>
      </div>
    );
  }
}

RecipeEdit.PropTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
