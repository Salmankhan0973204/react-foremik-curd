
import React from "react";
import Button from "@mui/material/Button";
import './Temp.css'


const TemperatureControl: React.FC = () => {

  const [temp, setTemp] = React.useState<number>(10);
  const [tempColor, setTempColor] = React.useState<string>("cold");
  const Increase = () => { 
    const tempValue = temp +1;
    if(temp >= 15){
      setTempColor('hot')
    }
    setTemp(tempValue)

  };
  const Decrease = () => {
    const tempValue = temp - 1
    if(temp <= 15){
      setTempColor('cold')
    }
    setTemp(tempValue)
  };
  return (
    <div className="form">
        <div className={`temp ${tempColor}`}>
      <h1>{temp}</h1></div>
      <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
      <Button variant="contained" onClick={()=> {Increase()}} >Increase</Button>
      <Button variant="contained" onClick={()=> {Decrease()}}>Decrease</Button>
      </div>
    </div>
  );
};

export default TemperatureControl;
