import React from "react";
import { Button, ControlLabel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default class AddGroup extends React.Component {
  render() {
    const { onChange, inputChange } = this.props;
    return (
      <div>
        <ControlLabel>Pridajte Grupu</ControlLabel>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nazov"
            onChange={inputChange}
          />
          <span className="input-group-btn">
            <Button variety="primary" onClick={onChange}>
              <div className="icons">
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
              Pridaj
            </Button>
          </span>
        </div>
      </div>
    );
  }
}
AddGroup.PropTypes = {
  onChange: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
};
