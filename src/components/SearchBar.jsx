import React from "react";
import PropTypes from "prop-types";
import { FormControl, ControlLabel } from "react-bootstrap";
export default class SearchBar extends React.Component {
  render() {
    const { value, onChange, label } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type="text"
          value={value}
          placeholder="Enter text"
          onChange={onChange}
        />
      </div>
    );
  }
}
SearchBar.PropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
