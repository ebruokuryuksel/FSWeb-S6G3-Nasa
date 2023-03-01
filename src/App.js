import React, { useEffect,useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  const [info, setInfo] = useState(null); //neden yazdım?
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: "DEMO_KEY",
        date: date.toISOString().split("T")[0],
      }
    })
    .then(function (response) {
      //console.log(response.data);
      setInfo(response.data); //
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });  
  }, [date])
  return (
    <div className="App">
      {
        info && (
          <div className = "container">
            <DatePicker selected={date} onChange={(e) => setDate(e)} />
            <h1>{info.title}</h1>
            <h1>{info.copyright}</h1>
            <h1>{info.date}</h1>
            <img src = {info.url} alt = {info.title}/>
            </div>
        )
      }
    </div>
  );
}

export default App;
