import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default class PreparationTime extends React.Component {
  render() {
    const { preparationTime } = this.props;
    if (preparationTime > 59 && preparationTime % 60 === 0) {
      return (
        <div>
          <div className="icons">
            <FontAwesomeIcon icon={faClock} />
          </div>
          {preparationTime / 60} h
        </div>
      );
    }
    if (preparationTime > 59 && preparationTime % 60 !== 0) {
      var preparationMinute = preparationTime % 60;
      var preparationHours = (preparationTime - preparationMinute) / 60;
      return (
        <div>
          <div className="icons">
            <FontAwesomeIcon icon={faClock} />
          </div>
          {preparationHours} h {preparationMinute} min
        </div>
      );
    }
    return (
      <div>
        <div className="icons">
          <FontAwesomeIcon icon={faClock} />
        </div>
        {preparationTime} min
      </div>
    );
  }
}
PreparationTime.PropTypes = {
  preparationTime: PropTypes.number.isRequired
};
