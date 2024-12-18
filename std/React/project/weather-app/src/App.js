import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if(e.key === 'Enter'){
      try {
        const data = await axios({
          method: 'get',
          url: url
        })
        setResult(data)
        console.log(data)
      }
      catch (err) {
        alert(err)
      }
    }
  }

  return (
    <AppWrap>
      <h1>날씨</h1>
      <input
        placeholder='도시 검색'
        value={location}
        onChange={(e)=>{ setLocation(e.target.value) }}
        type='text'
        onKeyDown={searchWeather}
      />
      {result && result.data && (
        <ResultWrap>
          <div className="city">{result.data.name}</div>
          <div className="temperature">{result.data.main.temp}°C</div>
          <div className="sky">{result.data.weather[0].main}</div>
        </ResultWrap>
      )}
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  display: flex;align-items: center;justify-content: center;flex-direction: column;
  width:100vw;
  height: 100vh;
  h1 {margin: 0;}
  .appContentWrap {
    padding: 20px;
  }
`
const ResultWrap = styled.div`
  margin-top: 60px;padding: 10px;border: 1px solid black;
  .city {font-size: 60px;}
  .temparature{
    font-size: 60px;margin-top: 10px;
  }
  .sky {
    font-size: 20px;text-align:right;margin-top: 10px;
  }
`