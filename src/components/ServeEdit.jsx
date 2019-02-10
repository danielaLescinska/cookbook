import React from "react";
import { ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class ServeEdit extends React.Component {
  render() {
    const { label, onChange, value, min } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            value={value}
            min={min}
            onChange={onChange}
            placeholder="Mnozstvo"
          />
        </div>
      </div>
    );
  }
}
ServeEdit.PropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};
