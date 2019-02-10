import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default class SideDish extends React.Component {
  render() {
    const { sideDish } = this.props;
    if (sideDish) {
      return (
        <div>
          <div className="icons">
            <FontAwesomeIcon icon={faUtensilSpoon} />
          </div>
          {sideDish}
        </div>
      );
    }
    return null;
  }
}
SideDish.PropTypes = {
  sideDish: PropTypes.string.isRequired
};
