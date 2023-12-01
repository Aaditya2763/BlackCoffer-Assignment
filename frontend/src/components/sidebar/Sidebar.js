import React, { useEffect, useState } from 'react';
import './Sidebar.css'; // Import the external CSS file
import {FiArrowRightCircle,FiArrowLeftCircle} from 'react-icons/fi'
import {SlCalender,SlLogout} from 'react-icons/sl'
import {MdTopic}from 'react-icons/md'
import {PiIntersectThree}from 'react-icons/pi'
import {GiUsaFlag} from 'react-icons/gi'
import {FcStatistics} from 'react-icons/fc'
import {FaUsers} from 'react-icons/fa'
import {BsGlobeCentralSouthAsia} from 'react-icons/bs'
import {GiPestleMortar} from 'react-icons/gi'
import {BiSolidCity} from 'react-icons/bi'
import DropdownBox from '../dropdown/DropdownBox';


const Sidebar = ({dropboxdata,onYearChange,onCityChange,onSourceChange,onPestsChange,onTopicChange,onSectorChange,onRegionChange,onCountryChange}) => {
  // console.log(dropboxdata)
  const [isOpen, setIsOpen] = useState(false);
const [year,setYear]=useState([])
const [topics,setTopics]=useState([])
const [sectors,setSectors]=useState([]);
const [regions,setRegions]=useState([]);
const [country,setCountry]=useState([]);
const [pests,setPests]=useState([]);
const [source,setSource]=useState([]);
const [city,setCity]=useState([]);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
   
  };
  console.log(country)
  useEffect(() => {
   //we are getting array of objects  that is why first we will map it to get array of years
   const yeardata=dropboxdata.map(years=>years.added)
   const years = yeardata
  .filter(data => data !== null) // Remove null values
  .map(data => new Date(data).getFullYear()) // Extract years
  .sort((a, b) => b - a)
  const uniqueYears = [...new Set(years)];
  setYear(uniqueYears);

//filtering topics
    const alltopics = dropboxdata.map(data=> data.topic)
    .filter((topic) => topic !== "")
    .sort((a, b) => a.localeCompare(b)); 
    const uniqueTopic = [...new Set(alltopics)];
    setTopics(uniqueTopic);

    //filtering Sectors
    const allSectors = dropboxdata.map(data => data.sector)
    .filter(topic => topic !== "")
    .sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
  const uniqueSector = [...new Set(allSectors)];
  setSectors(uniqueSector);

    //filtering Regions
    const allRegions = dropboxdata.map(data => data.region)
    .filter(topic => topic !== "")
    .sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
  const uniqueRegions = [...new Set(allRegions)];
  setRegions(uniqueRegions);

   //filtering Country
   const allCountry = dropboxdata.map(data => data.country)
   .filter(topic => topic !== "")
   .sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
 const uniqueCountry = [...new Set(allCountry)];
 setCountry(uniqueCountry);

  //filtering Pests
  const allPests = dropboxdata.map(data => data.pestle)
  .filter(topic => topic !== "")
  .sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
const uniquePests = [...new Set(allPests)];
setPests(uniquePests);

 //filtering Source
 const allSource = dropboxdata.map(data => data.source)
 .filter(topic => topic !== "")
 .sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
const uniqueSource = [...new Set(allSource)];
setSource(uniqueSource);

//filtering City
const allCity = dropboxdata.map(data => data.city)
.filter(topic => topic !== "")
.sort((a, b) => a.localeCompare(b)); // Use localeCompare for alphabetical sorting
const uniqueCity = [...new Set(allCity)];
setCity(uniqueCity);
  
  }, []);


  const handleYearChange = (value) => {
   
    onYearChange(value);
   
  };
  const handleTopicChange = (value) => {
  
  onTopicChange(value);
    // console.log(selectedValue)
    // You can use the selectedValue in your logic here
  };
  const handleSectorsChange = (value) => {
   
    onSectorChange(value);
  
    // You can use the selectedValue in your logic here
  };
  const handleRegionsChange = (value) => {
   
    onRegionChange(value);
    // console.log(selectedValue)
    // You can use the selectedValue in your logic here
  };
  const handleCountryChange = (value) => {
 
   onCountryChange(value);
 
    // You can use the selectedValue in your logic here
  };
  const handlePestsChange = (value) => {
   
   onPestsChange(value);
    // console.log(selectedValue)
    // You can use the selectedValue in your logic here
  };
  
  const handleSourceChange = (value) => {
  
    onSourceChange(value);
    // console.log(selectedValue)
    // You can use the selectedValue in your logic here
  };
  
 
  // console.log(year)

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar closed'}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FiArrowLeftCircle className="iconOpen"  /> : <FiArrowRightCircle className="iconsClose" />}
      </button>
      <div className="logo">
      </div>
      <div className="links">
        <div className="link" href="/">
          <SlCalender className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Year" data={year} displaydata="year"  onDropdownChange={handleYearChange}/></div>
        <div className="link" href="/">
          <MdTopic className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Topics" data={topics}  onDropdownChange={handleTopicChange} /></div>
        <div className="link" href="/">
          <PiIntersectThree className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Sector" data={sectors}  onDropdownChange={handleSectorsChange} /></div>
      <div className="link" href="/">
          <BsGlobeCentralSouthAsia className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Region" data={regions}  onDropdownChange={handleRegionsChange} /></div>
         <div className="link" href="/">
          <GiPestleMortar className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Pest" data={pests}  onDropdownChange={handlePestsChange} /></div>
        <div className="link" href="/">
          <FaUsers className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Source" data={source}  onDropdownChange={handleSourceChange} /></div>
        <div className="link" href="/">
          <GiUsaFlag className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen} title="Country" data={country}  onDropdownChange={handleCountryChange} /></div>
          {/* <div className="link" href="/">
          <BiSolidCity className='icon' onClick={toggleSidebar}/>
          <DropdownBox optionBoxHandler={isOpen}
        title="City"  data={city} /></div> */}
     
      <div  className="logoutBtn" ><SlLogout className='icon'/>{isOpen? <span style={{marginLeft:10}}>Logout</span>:""}</div>

      </div>
      
    </div>
  );
};

export default Sidebar;
