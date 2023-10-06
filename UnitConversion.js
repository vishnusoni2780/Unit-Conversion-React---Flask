import React, { useState, useEffect } from "react";
import "../assets/toggle.css"
 
function UnitConversion() {
    const [inputs, setInputs] = useState([]);
 
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState("");
    const [kg, setKg] = useState("");
    const [pound, setPound] = useState("");
    const [mile, setMile] = useState("");
    const [km, setKm] = useState("");
 
    const inputDistanceRef = React.createRef()
    const inputMassRef = React.createRef()
    const inputTemperatureRef = React.createRef()
 
    const [isDistanceToggle, setIsDistanceToggle] = useState(false);
    const [isMassToggle, setIsMassToggle] = useState(false);
    const [isTemperatureToggle, setIsTemperatureToggle] = useState(false);
    const [isToggleButton, setIsToggleButton] = useState(false);
 
 
    const handleToggleButton = () => {
        handleDistanceToggle();
        handleMassToggle();
        handleTemperatureToggle();
    }
 
    const handleDistanceToggle = () => {
        const kmValue = inputDistanceRef.current.value;
        if (kmValue) {
            let convertedValue;
            if (!isDistanceToggle) {
                // Convert to Mile
                convertedValue = (kmValue * 0.621).toFixed(3);
                inputDistanceRef.current.value = convertedValue
                console.log("if-->Km: ",kmValue,"Mile:",convertedValue, "Toggle: ",!isDistanceToggle)
                setMile(convertedValue)
                setKm(kmValue)
            } else {
                // Revert to Km
                inputDistanceRef.current.value = km
                console.log("else-->Km: ",km,"Mile:",mile, "Toggle: ",!isDistanceToggle)
                setMile(mile)
                setKm(km)
            }
            setIsDistanceToggle(!isDistanceToggle)
            setIsToggleButton(!isToggleButton)
        } else {
            console.error('Please enter a valid number for Kilo-Meter Distance.');
            setIsDistanceToggle(false)
        }
    }
 
    const handleMassToggle = () => {
        const kgValue = inputMassRef.current.value;
        if (kgValue) {
            let convertedValue;
            if (!isMassToggle) {
                // Convert to Mile
                convertedValue = (kgValue * 2.205).toFixed(3);
                inputMassRef.current.value = convertedValue
                console.log("if-->Kg: ",kgValue,"Pound:",convertedValue, "Toggle: ",!isMassToggle)
                setPound(convertedValue)
                setKg(kgValue)
            } else {
                // Revert to Km
                inputMassRef.current.value = kg
                console.log("else-->Kg: ",kg,"Pound:",pound, "Toggle: ",!isMassToggle)
                setPound(mile)
                setKg(km)
            }
            setIsMassToggle(!isMassToggle)
            setIsToggleButton(!isToggleButton)
        } else {
            console.error('Please enter a valid number for Kilo-gram Mass.');
            setIsMassToggle(false)
        }
    }
 
    
    const handleTemperatureToggle = () => {
        const celsiusValue = inputTemperatureRef.current.value;
        if (celsiusValue) {
            let convertedValue;
            if (!isTemperatureToggle) {
                // Convert to Fahrenheit
                convertedValue = ((celsiusValue * 9/5) + 32).toFixed(3);
                inputTemperatureRef.current.value = convertedValue
                console.log("if-->C: ",celsiusValue,"F:",convertedValue, "Toggle: ",!isTemperatureToggle)
                setFahrenheit(convertedValue)
                setCelsius(celsiusValue)
            } else {
                // Revert to Celsius
                inputTemperatureRef.current.value = celsius
                console.log("else-->C: ",celsius,"F:",fahrenheit, "Toggle: ",!isTemperatureToggle)
                setFahrenheit(fahrenheit)
                setCelsius(celsius)
            }
            setIsTemperatureToggle(!isTemperatureToggle)
            setIsToggleButton(!isToggleButton)
        } else {
            console.error('Please enter a valid number for Celsius temperature.');
            setIsTemperatureToggle(false)
        }
    }
 
    const handleChange = (event) => {
        const name = event.target.name;                     // Name of filed which will be edited
        const value = event.target.value;                   // value will be changed as per input
        setInputs(values => ({...values, [name]: value}));  // ...values Spread Operator    
        //console.log(name, value);                         // Name of field + Value entered
    }
 
    const validateInputs = () => {
        let c_distance = ""
        let c_mass = ""
        let c_temperature = ""
        if(inputDistanceRef.current.value ){
            c_distance = (inputDistanceRef.current.value*0.621).toFixed(3)
        }
        if(inputMassRef.current.value){
            c_mass = (2.205*inputMassRef.current.value).toFixed(3)
        }
        if(inputTemperatureRef.current.value){
            c_temperature = ((inputTemperatureRef.current.value * (9/5)) + 32).toFixed(3)
        }
        const ls = [c_distance,c_mass,c_temperature]
        return ls
    }
 
    const handleSubmit = (event) => {
        /*const c_distance = (inputDistanceRef.current.value*0.621)
        const c_mass = 2.205*inputMassRef.current.value
        const c_temperature = ((inputTemperatureRef.current.value * (9/5)) + 32)*/
        let ls = validateInputs();
        let c_distance = ls[0]
        let c_mass = ls[1]
        let c_temperature = ls[2]
 
        const converted_data = {
            "distance":{
                "unit":"miles",
                "measurement":c_distance
            },
            "mass":{
                "unit":"pounds",
                "measurement":c_mass
            },
            "temperature":{
                "unit":"F",
                "measurement":c_temperature
            }
        }
        
        setInputs(
            inputDistanceRef.current.value = c_distance,
            inputMassRef.current.value = c_mass,
            inputTemperatureRef.current.value = c_temperature
        )
        console.log("Converted Data: ", converted_data)
    }
 
    const clearBtn = () => {
        setInputs(
            inputDistanceRef.current.value = "",
            inputMassRef.current.value = "",
            inputTemperatureRef.current.value = ""
        )
        setIsDistanceToggle(false)
        setIsMassToggle(false)
        setIsTemperatureToggle(false)
        setIsToggleButton(false)
    }
 
 
    return (
        <div>
            <div className='jumbotron'>
                <h2 className='page-header text-center'>Unit Conversion</h2>
            </div>
            
            <div>
 
                <div className="mb-1" style={{width: "500px", marginLeft:"150px"}}>
                    <div className='toggle-switch' style={{width: "500px"}}>
                        <label className='toggle-switch label' style={{width: "15px", marginLeft: "200px"}}>
                            { (isToggleButton) ? <>On</> : <>Off</> }
                        </label>
                        <input type="checkbox" style={{marginLeft: "10px"}} checked={isToggleButton} onChange={handleToggleButton} />
                    </div>
                </div>
 
                <div className="mb-3" style={{width: "150px"}}>
                    <label className="form-label">Distance</label>
                    <div className="d-flex align-items-center mb-3" style={{width: "150px"}}>
                        <input ref={inputDistanceRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="distance" onChange={handleChange} />
                        <div className='toggle-switch' style={{width: "200px"}}>
                            <label className='toggle-switch label' style={{width: "15px"}}>
                                { (isDistanceToggle) ? <>Mile</> : <>Km</> }
                            </label>
                            {/* <input type="checkbox" style={{marginLeft: "10px"}} checked={isDistanceToggle} onChange={handleDistanceToggle} /> */}
                        </div>
                    </div>
                </div>
 
                <div className="mb-3" style={{width: "150px"}}>
                    <label className="form-label">Mass</label>
                    <div className="d-flex align-items-center mb-3" style={{width: "150px"}}>
                        <input ref={inputMassRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="distance" onChange={handleChange} />
                        <div className='toggle-switch' style={{width: "200px"}}>
                            <label className='toggle-switch label' style={{width: "28px"}}>
                                { (isMassToggle) ? <>Pound</> : <>Kg</> }
                            </label>
                            {/* <input type="checkbox" style={{marginLeft: "10px"}} checked={isMassToggle} onChange={handleMassToggle} /> */}
                        </div>
                    </div>
                </div>
 
                <div className="mb-3" style={{width: "150px"}}>
                    <label className="form-label">Temperature</label>
                    <div className="d-flex align-items-center mb-3" style={{width: "150px"}}>
                        <input ref={inputTemperatureRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="distance" onChange={handleChange} />
                        <div className='toggle-switch' style={{width: "200px"}}>
                            <label className='toggle-switch label' style={{width: "15px"}}>
                                { (isTemperatureToggle) ? <>°F</> : <>°C</> }
                            </label>
                            {/* <input type="checkbox" style={{marginLeft: "10px"}} checked={isTemperatureToggle} onChange={handleTemperatureToggle} /> */}
                        </div>
                    </div>
                </div>
 
                <div className="row" style={{marginLeft:5}}>
                    <div className="col-md-1" style={{alignItems:'center', display: 'flex',  justifyContent:'center'}}>
                        <button type="submit" onClick={handleSubmit} name="convertBtn" className="btn btn-primary" style={{width:100}}>Convert</button>
                    </div>
                    <div className="col-md-1" style={{alignItems:'center', display: 'flex',  justifyContent:'center'}}>
                        <button type="reset" onClick={clearBtn} name="clearBtn" className="btn btn-primary" style={{width:100}}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default UnitConversion