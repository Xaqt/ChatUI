import React from 'react';
export var Time = function Time(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/React.createElement("time", {
    className: "Time",
    dateTime: new Date(date).toJSON()
  }, new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  }));
};