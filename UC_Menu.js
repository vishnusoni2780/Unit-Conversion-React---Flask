import React, { useState } from "react";
import "../assets/toggle.css"
 
function UC_Menu() {
    const [inputs, setInputs] = useState([]);
 
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState("");
    const [kg, setKg] = useState("");
    const [pound, setPound] = useState("");
    const [mile, setMile] = useState("");
    const [km, setKm] = useState("");
    const [cubicYards, setCubicYards] = useState("");
    const [cubicMeter, setCubicMeter] = useState("");
 
    const inputDistanceRef = React.createRef()
    const inputMassRef = React.createRef()
    const inputTemperatureRef = React.createRef()
    const inputVolumeRef = React.createRef()
 
   const [isDistanceToggle, setIsDistanceToggle] = useState(false);
    const [isMassToggle, setIsMassToggle] = useState(false);
    const [isTemperatureToggle, setIsTemperatureToggle] = useState(false);
    const [isVolumeToggle, setIsVolumeToggle] = useState(false);
    const [isToggleButton, setIsToggleButton] = useState(false);
 
    
    const [selectedDistanceUnit, setSelectedDistanceUnit] = useState(0);
    const [selectedMassUnit, setSelectedMassUnit] = useState(0);
    const [selectedVolumeUnit, setSelectedVolumeUnit] = useState(0);
 
    const DistanceUnits_SI = ['Km','m']
    const DistanceUnits_US = ['Mile','ft']
    const MassUnits_SI = ['Kg','g']
    const MassUnits_US = ['Pounds','ounce']
    const VolumeUnits_SI = ['m3','cm3']
    const VolumeUnits_US = ['yards3','inch3']
 
    const handleToggleButton = () => {
        handleDistanceToggle();
        handleMassToggle();
        handleVolumeToggle();
        handleTemperatureToggle();
    }
 
    // Distance Unit
    const handleDistanceToggle = () => {
        const currentValue = inputDistanceRef.current.value;
        if (currentValue) {
            if (selectedDistanceUnit === 0){
                // km - to - Mile conversion
                Km_to_mile(currentValue)
            }
            else{
                // m - to - ft conversion
                M_to_ft(currentValue)
            }
            let index = selectedDistanceUnit
            console.log("Select Mass Unit: ", index)
            console.log("SI Distance Unit: ", DistanceUnits_SI[index])
            console.log("US Distance Unit: ", DistanceUnits_US[index])
 
        } else {
            console.error('Please enter a valid number for Kilo-gram Mass.');
            setIsDistanceToggle(false)
        }
    }
    const Km_to_mile = (currentValue) => {
        let convertedValue;
            if (!isDistanceToggle) {
                // Convert to Mile
                convertedValue = (currentValue * 0.621).toFixed(3);
                inputDistanceRef.current.value = convertedValue
                console.log("if-->Km: ",currentValue,"Mile:",convertedValue, "Toggle: ",!isDistanceToggle)
                setMile(convertedValue)
                setKm(currentValue)
            } else {
                // Revert to Km
                inputDistanceRef.current.value = km
                console.log("else-->Km: ",km,"Mile:",mile, "Toggle: ",!isDistanceToggle)
                setMile(mile)
                setKm(km)
            }
            setIsDistanceToggle(!isDistanceToggle)
            setIsToggleButton(!isToggleButton)
    }
    const M_to_ft = (currentValue) => {
        let convertedValue;
            if (!isDistanceToggle) {
                // Convert to ft
                convertedValue = (currentValue * 0.035).toFixed(3);
                inputDistanceRef.current.value = convertedValue
                console.log("if-->Km: ",currentValue,"Mile:",convertedValue, "Toggle: ",!isDistanceToggle)
                setMile(convertedValue)
                setKm(currentValue)
            } else {
                // Revert to m
                inputDistanceRef.current.value = km
                console.log("else-->Km: ",km,"Mile:",mile, "Toggle: ",!isDistanceToggle)
                setMile(mile)
                setKm(km)
            }
            setIsDistanceToggle(!isDistanceToggle)
            setIsToggleButton(!isToggleButton)
    }
    const Km_to_m = (currentValue) =>{
        return currentValue*1000
    }
    const m_to_Km = (currentValue) =>{
        //return (currentValue/1000).toFixed(3);
        return currentValue/1000
    }
    const handleDistaceChange = (event) => {
        setSelectedDistanceUnit(event.target.value)
        handleDistanceInputField(event)
    }
    const handleDistanceInputField = (event) => {
        console.log("-> ", event.target.value)
        const index = event.target.value
        const currentValue = inputDistanceRef.current.value;
        if (currentValue) {
            if(index == 1){
                console.log("--> if", index)
                inputDistanceRef.current.value = Km_to_m(currentValue)
                console.log("--> if", inputDistanceRef.current.value)
            }
            else{
                console.log("--> else", index)
                inputDistanceRef.current.value = m_to_Km(currentValue)
                console.log("--> else", inputDistanceRef.current.value)
            }
            console.log("--> index", index)
            console.log("--> setSelectedDistanceUnit", selectedDistanceUnit)
        } else {
            console.error('Please enter a valid number for Distance.');
            setIsMassToggle(false)
        }
    }
    
    // Mass Unit
    const handleMassToggle = () => {
        const currentValue = inputMassRef.current.value;
        if (currentValue) {
            if (selectedMassUnit === 0){
                // kg - to - Pound conversion
                Kg_to_Pound(currentValue)
            }
            else{
                // g - to - ounce conversion
                G_to_Ounce(currentValue)
            }
            let index = selectedMassUnit
            console.log("Select Mass Unit: ", index)
            console.log("SI Mass Unit: ", MassUnits_SI[index])
            console.log("US Mass Unit: ", MassUnits_US[index])
 
        } else {
            console.error('Please enter a valid number for Kilo-gram Mass.');
            setIsMassToggle(false)
        }
    }
    const Kg_to_Pound = (currentValue) => {
        let convertedValue;
            if (!isMassToggle) {
                // Convert to pound
                convertedValue = (currentValue * 2.205).toFixed(3);
                inputMassRef.current.value = convertedValue
                console.log("if-->Kg: ",currentValue,"Pound:",convertedValue, "Toggle: ",!isMassToggle)
                setPound(convertedValue)
                setKg(currentValue)
            } else {
                // Revert to Kg
                inputMassRef.current.value = kg
                console.log("else-->Kg: ",kg,"Pound:",pound, "Toggle: ",!isMassToggle)
                setPound(pound)
                setKg(kg)
            }
            setIsMassToggle(!isMassToggle)
            setIsToggleButton(!isToggleButton)
    }
    const G_to_Ounce = (currentValue) => {
        let convertedValue;
            if (!isMassToggle) {
                // Convert to ounce
                convertedValue = (currentValue * 0.035).toFixed(3);
                inputMassRef.current.value = convertedValue
                console.log("if-->g: ",currentValue,"Ounce:",convertedValue, "Toggle: ",!isMassToggle)
                setPound(convertedValue)
                setKg(currentValue)
            } else {
                // Revert to g
                inputMassRef.current.value = kg
                console.log("else-->g: ",kg,"Ounce:",pound, "Toggle: ",!isMassToggle)
                setPound(pound)
                setKg(kg)
            }
            setIsMassToggle(!isMassToggle)
            setIsToggleButton(!isToggleButton)
    }
    const Kg_to_g = (currentValue) =>{
        return currentValue*1000
    }
    const g_to_Kg = (currentValue) =>{
        //return (currentValue/1000).toFixed(3);
        return currentValue/1000
    }
    const handleMassChange = (event) => {
        setSelectedMassUnit(event.target.value)
        handleMassInputField(event)
    }
    const handleMassInputField = (event) => {
        console.log("-> ", event.target.value)
        const index = event.target.value
        const currentValue = inputMassRef.current.value;
        if(currentValue){
            if(index == 1){
                console.log("--> if", index)
                inputMassRef.current.value = Kg_to_g(currentValue)
                console.log("--> if", inputMassRef.current.value)
            }
            else{
                console.log("--> else", index)
                inputMassRef.current.value = g_to_Kg(currentValue)
                console.log("--> else", inputMassRef.current.value)
            }
            console.log("--> index", index)
            console.log("--> setSelectedMassOption", selectedMassUnit)
        } else {
            console.error('Please enter a valid number for Mass.');
            setIsMassToggle(false)
        }
    }
 
    // Volume Unit
    const handleVolumeToggle = () => {
        const currentValue = inputVolumeRef.current.value;
        if (currentValue) {
            if (selectedVolumeUnit === 0){
                // m3 - to - yards3 conversion
                m3_to_yards3(currentValue)
            }
            else{
                // cm3 - to - inch3 conversion
                cm3_to_inch3(currentValue)
            }
            let index = selectedVolumeUnit
            console.log("Select Mass Unit: ", index)
            console.log("SI Volume Unit: ", VolumeUnits_SI[index])
            console.log("US Volume Unit: ", VolumeUnits_US[index])
 
        } else {
            console.error('Please enter a valid number for Kilo-gram Mass.');
            setIsVolumeToggle(false)
        }
    }
    const m3_to_yards3 = (currentValue) => {
        let convertedValue;
            if (!isVolumeToggle) {
                // Convert to yards3
                convertedValue = (currentValue * 1.307).toFixed(3);
                inputVolumeRef.current.value = convertedValue
                console.log("if-->m3: ",currentValue,"yards3:",convertedValue, "Toggle: ",!isVolumeToggle)
                setCubicYards(convertedValue)
                setCubicMeter(currentValue)
            } else {
                // Revert to m3
                inputVolumeRef.current.value = cubicMeter
                console.log("else-->m3: ",cubicMeter,"yards3:",cubicYards, "Toggle: ",!isVolumeToggle)
                setCubicYards(cubicYards)
                setCubicMeter(cubicMeter)
            }
            setIsVolumeToggle(!isVolumeToggle)
            setIsToggleButton(!isToggleButton)
    }
    const cm3_to_inch3 = (currentValue) => {
        let convertedValue;
            if (!isVolumeToggle) {
                // Convert to inch3
                convertedValue = (currentValue * 0.061).toFixed(3);
                inputVolumeRef.current.value = convertedValue
                console.log("if-->cm3: ",currentValue,"inch3:",convertedValue, "Toggle: ",!isVolumeToggle)
                setCubicYards(convertedValue)
                setCubicMeter(currentValue)
            } else {
                // Revert to cm3
                inputVolumeRef.current.value = cubicMeter
                console.log("else-->cm3: ",cubicMeter,"inch3:",cubicYards, "Toggle: ",!isVolumeToggle)
                setCubicYards(cubicYards)
                setCubicMeter(cubicMeter)
            }
            setIsVolumeToggle(!isVolumeToggle)
            setIsToggleButton(!isToggleButton)
    }
    const m3_to_cm3 = (currentValue) =>{
        return currentValue*1000000
    }
    const cm3_to_m3 = (currentValue) =>{
        //return (currentValue/1000).toFixed(3);
        return currentValue/1000000
    }
    const handleVolumeChange = (event) => {
        setSelectedVolumeUnit(event.target.value)
        handleVolumeInputField(event)
    }
    const handleVolumeInputField = (event) => {
        console.log("-> ", event.target.value)
        const index = event.target.value
        const currentValue = inputVolumeRef.current.value;
        if (currentValue) {
            if(index == 1){
                console.log("--> if", index)
                inputVolumeRef.current.value = m3_to_cm3(currentValue)
                console.log("--> if", inputVolumeRef.current.value)
            }
            else{
                console.log("--> else", index)
                inputVolumeRef.current.value = cm3_to_m3(currentValue)
                console.log("--> else", inputVolumeRef.current.value)
            }
            console.log("--> index", index)
            console.log("--> setSelectedVolumeOption", selectedVolumeUnit)
        } else {
            console.error('Please enter a valid number for Kilo-gram Mass.');
            setIsMassToggle(false)
        }
    }
 
    // Temperature Unit
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
 
    // Bottom Buttons
    const validateInputs = () => {
        let c_distance = ""
        let c_mass = ""
        let c_vol = ""
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
        if(inputVolumeRef.current.value){
            c_vol = (inputVolumeRef.current.value * 1.307).toFixed(3);
        }
        const ls = [c_distance,c_mass,c_temperature, c_vol]
        return ls
    }
    const handleSubmit = (event) => {
        let ls = validateInputs();
        let c_distance = ls[0]
        let c_mass = ls[1]
        let c_temperature = ls[2]
        let c_vol = ls[3]
 
        const converted_data = {
            "distance":{
                "unit":"miles",
                "measurement":c_distance
            },
            "mass":{
                "unit":"pounds",
                "measurement":c_mass
            },
            "volume":{
                "unit":"yards3",
                "measurement":c_vol
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
            inputTemperatureRef.current.value = "",
            inputVolumeRef.current.value = ""
        )
        setIsDistanceToggle(false)
        setIsMassToggle(false)
        setIsTemperatureToggle(false)
        setIsVolumeToggle(false)
        setIsToggleButton(false)
        setSelectedDistanceUnit(0)
        setSelectedMassUnit(0)
        setSelectedVolumeUnit(0)
    }
 
 
    return (
        <div>
            <div className='jumbotron'>
                <h2 className='page-header text-center'>Unit Conversion</h2>
            </div>
            <nav className="navbar navbar-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Bootstrap Hamburger Menu</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav mr-auto"> 
 
                            <div className="nav-item">
                                <h3 className="nav-link scroll-link" >Choose your Unit</h3>
                            </div>
                            {/* Hamburger Menu Options */}
                            <div style={{width: "550px"}}>
                                <div className="mb-3" style={{width: "150px"}}>
                                    <label className="form-label" style={{marginRight: "5px"}}>Distance</label>
                                    
                                    {
                                    (isDistanceToggle) ?
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleDistaceChange} value={selectedDistanceUnit}>
                                            <option value="0">{DistanceUnits_US[0]}</option>
                                            <option value="1">{DistanceUnits_US[1]}</option>
                                        </select>
                                        </>
                                    :
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleDistaceChange} value={selectedDistanceUnit}>
                                            <option value="0">{DistanceUnits_SI[0]}</option>
                                            <option value="1">{DistanceUnits_SI[1]}</option>
                                        </select>
                                        </>
                                    }
                                    
                                </div>
                                <div className="mb-3" style={{width: "150px"}}>
                                    <label className="form-label" style={{marginRight: "5px"}}>Mass</label>
                                    
                                    {
                                    (isMassToggle) ?
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleMassChange} value={selectedMassUnit}>
                                            <option value="0">{MassUnits_US[0]}</option>
                                            <option value="1">{MassUnits_US[1]}</option>
                                        </select>
                                        </>
                                    :
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleMassChange} value={selectedMassUnit}>
                                            <option value="0">{MassUnits_SI[0]}</option>
                                            <option value="1">{MassUnits_SI[1]}</option>
                                        </select>
                                        </>
                                    }
                                    
                                </div>
                                <div className="mb-3" style={{width: "150px"}}>
                                    <label className="form-label" style={{marginRight: "5px"}}>Volume</label>
                                    
                                    {
                                    (isVolumeToggle) ?
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleVolumeChange} value={selectedVolumeUnit}>
                                            <option value="0">{VolumeUnits_US[0]}</option>
                                            <option value="1">{VolumeUnits_US[1]}</option>
                                        </select>
                                        </>
                                    :
                                        <>
                                        <select className="form-select" aria-label="Select mass" onChange={handleVolumeChange} value={selectedVolumeUnit}>
                                            <option value="0">{VolumeUnits_SI[0]}</option>
                                            <option value="1">{VolumeUnits_SI[1]}</option>
                                        </select>
                                        </>
                                    }
                                    
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
            </nav>
            
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
                        <input ref={inputDistanceRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="distance"/>
                        <label style={{width: "100px"}}>
                                { (isDistanceToggle) ? <>{DistanceUnits_US[selectedDistanceUnit]}</>
                                :
                                <></>
                        }
                        </label>
                    </div>
                </div>
                <div className="mb-3" style={{width: "150px"}}>
                    <label className="form-label">Mass</label>
                    <div className="d-flex align-items-center mb-3" style={{width: "150px"}}>
                        <input ref={inputMassRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="mass" />
                        <label style={{width: "100px"}}>
                                { (isMassToggle) ? <>{MassUnits_US[selectedMassUnit]}</>
                                :
                                <></>
                        }
                        </label>
                    </div>
                </div>
                <div className="mb-3" style={{width: "150px"}}>
                    <label className="form-label">Volume</label>
                    <div className="d-flex align-items-center mb-3" style={{width: "150px"}}>
                        <input ref={inputVolumeRef} style={{width: "150px", marginLeft:"1px",marginRight: "10px"}} type="text" className="form-control" name="volume"/>
                        <label style={{width: "100px"}}>
                                { (isVolumeToggle) ? <>{VolumeUnits_US[selectedVolumeUnit]}</>
                                :
                                <></>
                        }
                        </label>
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
 
export default UC_Menu
