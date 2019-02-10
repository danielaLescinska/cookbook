import React from "react";
import ProprTypes from "prop-types";

export default class DirectionsEdit extends React.Component {
  render() {
    const { directions } = this.props;
    if (!directions) {
      return <div />;
    }
    return (
      <div>
        {directions
          .toString()
          .split("\n")
          .map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
      </div>
    );
  }
}

DirectionsEdit.ProprTypes = {
  directions: ProprTypes.string.isRequired
};
