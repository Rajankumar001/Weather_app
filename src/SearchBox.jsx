import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'
export default  function searchBox({updateInfo}){
    let [city,setcity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0f2a8250348e2d0a8732549e6730822a";
    let getweatherInfo=async()=>{
        const Info=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await Info.json();
        console.log(jsonresponse);
        let result={
            City:city,
            temp:jsonresponse.main.temp,
            feels:jsonresponse.main.feels_like,
            humidity:jsonresponse.main.humidity,
            
            }
            console.log(result);
            return result;
            }
   
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit=async(event)=>{
        event.preventDefault();
       console.log(city);
       setcity("");
        let newinfo=await getweatherInfo();
        updateInfo(newinfo);
        }
    return(
        <div className='search_section'>
        <form action="" onSubmit={handlesubmit} className='form_section'>
        <TextField id="City" label="City Name" variant="outlined"  value={city} onChange={handlechange} required/>
      <Button  variant="contained" type='submit' className='button_section' >
        Search
      </Button>

        </form>
        </div>
    );
}