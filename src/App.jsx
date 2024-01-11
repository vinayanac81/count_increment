import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const handleCount = (type) => {
    if (type === "minus") {
      setcount(count - 1);
    } else {
      setcount(count + 1);
    }
  };
  return (
    <>
      <div className="main">
        <div
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          className="content"
        >
          <h1>COUNTER</h1>
          <div className="sub">
            <div onClick={() => handleCount("minus")} className="minus">
              -
            </div>
            <div className="display">{count}</div>
            <div onClick={() => handleCount("plus")} className="plus">
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
