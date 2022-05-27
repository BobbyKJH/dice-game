import React, { useState } from "react";
import "./Page.css";

function Page() {
  const [dice, setDice] = useState(Math.random());
  return (
    <div className="box">
      <h1>Dice Game</h1>
      <input type="number" />
    </div>
  );
}

export default Page;
