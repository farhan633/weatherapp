import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Temperatue, setTemperatue] = useState(0)
  const[city, setcity]= useState('kochi')
  const [unit, setunit] = useState('C')
  useEffect(()=>{
let latitude;
let longitude;
if(city=== 'kochi'){
  latitude=9.9312
  longitude=76.2673
}
else if(city==='banglore'){
  latitude=12.9716
  longitude=77.5946
}
else{
  latitude=28.7041
  longitude=28.7041
}

const url ='https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
fetch(url)
.then(res=>res.json())
.then(date=>{
let currentTemp = date.current.temperature_2m
if(unit === "F"){
  currentTemp = (currentTemp * 9/5) + 32

}
setTemperatue(currentTemp.toFixed(1))

 

})
.catch(error=>console.log(error))

  },[city,unit])
const changeunit = ()=>{
  if(unit === 'C'){
    setunit('F')
    const tempinf = (Temperatue * 9/5) + 32
    setTemperatue(tempinf.toFixed())
  }
  else{
    setunit('C')
    const tempinc = (Temperatue- 32) * 5/9
    setTemperatue(tempinc.toFixed())
  }
}
farhan k 
//code done by 48
  return (
   <>
<header>

</header>
<main>
<h1>
  the  temperatue at {city} is <span id='temp'>{Temperatue} &deg;{unit}</span>
</h1>
<button onClick={changeunit}>to {unit==='C'?'F':'C'}</button>
<div id='citydiv'>
  <button onClick={()=>{setcity('kochi')}}>
    kochi
  </button>
  <button onClick={()=>{setcity('banglore')}}>
 banglore
  </button>
  <button onClick={()=>{setcity('delhi')}}>
    delhi
  </button>

</div>
</main>
<footer>

</footer>
   </>
  );
}

export default App;
