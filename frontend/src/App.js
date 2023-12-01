import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Loading from './components/loading/loading';
import Error from './components/loading/error';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/products/productsdata', {
          timeout: 5000, // Set a timeout of 5 seconds (5000 milliseconds)
          
        });

        if (response.status !== 200) {
          setError(true);
        } else {
          setData(response.data);
      console.log(data)
        }

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array means this effect runs once after the initial render

  const retryHandler = () => {
    window.location.reload();
  };

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    // return <Error retryHandler={retryHandler}/>;
    <h1>Something went wrong please try again</h1>
  }

  return (
    <BrowserRouter>
      {/* Wrap your app with BrowserRouter */}
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<Dashboard data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
