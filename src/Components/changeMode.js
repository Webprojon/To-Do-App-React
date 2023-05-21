import React, { useState } from "react";
// Hooks
const Mode = () => {
  const [mode, setMode] = useState(true);

  // Function

  // ⬇⬇⬇ Here, there is a bug to fix
  const changeMode = () => {
    setMode(!mode);

    if (mode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  if (localStorage.getItem("theme") === "light") {
    document.body.style.backgroundColor = "rgb(205, 231, 241)";
  } else if (localStorage.getItem("theme") === "dark") {
    document.body.style.backgroundColor = "#374151";
  }
  // ⬆⬆⬆ Here, there is a bug to fix

  return (
    <div className="change__mode">
      <i
        onClick={changeMode}
        className={mode ? "fas fa-moon" : "fas fa-sun"}
      ></i>
    </div>
  );
};

export default Mode;
