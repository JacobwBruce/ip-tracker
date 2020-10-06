import React, { useState, useEffect } from 'react';
import './App.css';
import TopSection from './TopSection';
import Map from './Map';
import axios from 'axios';

function App() {
  const API_KEY =
    'at_H3N6BZijtUJBj67qKczSHF2toz17S';
  const [input, changeInput] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(input);
  }

  useEffect(() => {
    async function fetchData() {
      let result = await axios(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`);
      setData({
        lat: result.data.location.lat,
        lng: result.data.location.lng,
        timezone: result.data.location.timezone,
        location: `${result.data.location.city}, ${result.data.location.region}, ${result.data.location.country}`,
        isp: result.data.as.name,
        ip: result.data.ip
      });
    }
    fetchData();
  }, []);

  const isValidIp = (ip) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ip
      )
    ) {
      return true;
    }
    return false;
  }

  const getData = async (query) => {
    let result;
    try {
      if (isValidIp(query)) {
        console.info('Searching for an IP Address')
        result = await axios(
          `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${query}`
        );
      } else {
        console.log('Searching for a domain');
        result = await axios(
          `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&domain=${query}`
        );
      }
      setData({
        lat: result.data.location.lat,
        lng: result.data.location.lng,
        timezone: result.data.location.timezone,
        location: `${result.data.location.city}, ${result.data.location.region}, ${result.data.location.country}`,
        isp: result.data.as.name,
        ip: result.data.ip
      });
    } catch (err) {
      console.error(`Could not find ${query}. Try another search ${err}`)
    }
  }

  return (
    <div className="App">
      {data &&
        <>
          <TopSection input={input} changeInput={changeInput} handleSubmit={handleSubmit} data={data} />
          <Map data={data} />
        </>
      }
    </div>
  );
}

export default App;
