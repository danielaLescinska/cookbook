import React from "react";
import { ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class AmountUnitAdd extends React.Component {
  render() {
    const { label, onChange } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Jednotka"
            onChange={onChange}
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
