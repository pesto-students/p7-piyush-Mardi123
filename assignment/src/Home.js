import { useState } from "react"

function Box() {
  const [inputVal, setInputVal] = useState("");
  const [outputVal, setOutputVal] = useState("");

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function handleClick() {
    const value = JSON.parse(inputVal);
    const keys = Object.keys(value);
    const values = Object.values(value);
    let opString = "";

    keys.forEach((element, index) => {
      const val = values[index];
      opString += `${element} : ${val}\n`;
    });

    console.log(opString);
    setOutputVal(opString);
  }

  return (
    <div>
      <div className="input">
        <p>
          <input type="textbox" onChange={handleChange} />
        </p>
      </div>
      <div className="output">
        <p>{"{"}</p>
        {outputVal.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p>{"}"}</p>
      </div>
      <div>
        <button onClick={handleClick}>Validate</button>
      </div>
    </div>
  );
}

export default Box;
