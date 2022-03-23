import React, { useState } from "react";
import "../Styles/Form.css";
import TextInput from "./TextInput";

const Form = () => {
  const [height, setHeight] = useState(1);
  const [weights, setWeights] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [info, setInfo] = useState();
  const [displayInfo, setDisplayInfo] = useState(false);

  const handleCalculate = () => {
    let result = ((weights/(height*height))*10000).toFixed(1);
    setBMI(result);
    setDisplayInfo(true);
    if (result < 18.5) {
      setInfo("Underweight");
    }
    else if (result >= 18.5 && result <= 24.9) {
      setInfo("Healthy");
    }
    else if (result >= 25 && result <= 29.9) {
      setInfo("Overweight");
    }
    else {
      setInfo("Obese")
    }
    
  }

  return (
    <div>
      <div className="row">
        <h2>Height</h2>
        <TextInput
          label="Centimeters"
          placeholder="Enter your height"
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>

      <div className="row">
        <h2>Weight</h2>
        <TextInput
          label="Kilograms"
          placeholder="Enter your weights"
          onChange={(event) => setWeights(event.target.value)}
        />
      </div>

      <div className="row">
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      <div className="row">
        <p className="info">Your BMI is {BMI} and you are {info}</p>
      </div>
    </div>
  );
};

export default Form;
