import React, { useState } from "react";
import "./Page.css";

function Page() {
  const [dice, setDice] = useState(Math.random());
  return (
    <div className="box">
      <input type="number" />
    </div>
  );
}

export default Page;
