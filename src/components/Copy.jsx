import React, { useState } from "react";

export default function CurrencyConverte() {
  const [inp1, setinp1] = useState();
  const [usd, setUsd] = useState(75);
  const [inp2, setInp2] = useState();
  const [state, setState] = useState();
  let input1;
  let input2;
  const handleinp1 = (e) => {
    const input1 = e.target.value;
    setinp1(input1 * usd);
  };
  const handleinp2 = (e) => {
    const input2 = e.target.value;
    setInp2(input2 / usd);
    setinp1(inp1 / usd);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <label htmlFor="usd">USD</label>
            <input
              type="number"
              id="usd"
              className="form-control"
              onChange={handleinp1}
              Value={inp2}
            />
            <strong>Convert USD to INR</strong> <br />
            <label htmlFor="INR">INR</label>
            <input
              type="number"
              id="INR"
              className="form-control"
              onChange={handleinp2}
              Value={inp1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}