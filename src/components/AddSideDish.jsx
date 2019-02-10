import React from "React";
import { ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class AddSideDish extends React.Component {
  render() {
    const { onChange, label } = this.props;
    return (
      <div>
        <ControlLabel>{label}</ControlLabel>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Priloha"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}
AddSideDish.PropTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
