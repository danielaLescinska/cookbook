import React from "react";
import { ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class AmountUnitAdd extends React.Component {
  render() {
    const { label, onChange, value } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nazov"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    );
  }
}
AmountUnitAdd.PropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
