import React from "react";

const DateFormat = () => {
  // Create Current Date
  const now = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const time = new Intl.DateTimeFormat("en-GB", options).format(now);
  return (
    <div>
      <p>{time}</p>
    </div>
  );
};

export default DateFormat;
