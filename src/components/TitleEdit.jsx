import React from "react";
import { ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class TitleEdit extends React.Component {
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
          <small className="form-text text-muted">Názov je povinný</small>
        </div>
      </div>
    );
  }
}

TitleEdit.PropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
