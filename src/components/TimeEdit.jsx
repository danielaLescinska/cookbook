import React from "react";
import { ControlLabel, FormGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default class TimeEdit extends React.Component {
  render() {
    const { label, onChange, value } = this.props;
    return (
      <div>
        <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <div className="input-group">
            <span className="input-group-addon" id="btnGroupAddon">
              min
            </span>
            <input
              type="number"
              className="form-control"
              aria-describedby="btnGroupAddon"
              value={value}
              min={1}
              onChange={onChange}
            />
          </div>
        </FormGroup>
      </div>
    );
  }
}

TimeEdit.PropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
