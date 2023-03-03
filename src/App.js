import React, { useEffect,useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [info, setInfo] = useState(null); //neden yazdım?
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: "waTxpksVjghFqmVLWQ4Mlgr5K2vcJGqmq7wD9IV1",
        date: date,
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

  if (!info)
  return (
    <div className="App">
      <h1>Yükleniyor...</h1>
    </div>
  );

  return (
    <div className="App"
    style = {{
      width : "100vw",
      height: "100vh",
      backgroundImage: `url(${info.hdurl})`,
    }}>
      {
        info && (
          <div className = "container">
            <input 
            type="date" 
            value={date}
            onChange={(event)  => setDate(event.target.value)} 
            />
            <h1>{info.title}</h1>
            <h2>{info.copyright}</h2>
            <h3>{info.date}</h3>
            {/* <img src = {info.url} alt = {info.title}/> */}
            </div>
        )
      }
    </div>
  );
}

export default App;
