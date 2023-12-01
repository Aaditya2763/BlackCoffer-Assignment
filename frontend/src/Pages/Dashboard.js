import React,{useState} from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./Dashboard.css";
import ChartComponent from "../components/charts/chartcomponent";
import { barChartData, lineChartData, lineChartData2, pieChartData } from "../components/dummyData/chartdata";
const Dashboard = ({data}) => {
  
 const [year,setYear]=useState("undefined")
 const [topics,setTopics]=useState("undefined")
 const [sectors,setSectors]=useState("undefined");
 const [regions,setRegions]=useState("undefined");
 const [country,setCountry]=useState("undefined");
 const [pests,setPests]=useState("undefined");
 const [source,setSource]=useState("undefined");
//  const [city,setCity]=useState("undefined");
const [selectedValue, setSelectedValue] = useState("undefined"); // Step 1: Create state variable

// Step 2: Define a function to update the selected value
const handleYearChange = (value) => {
  setYear(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};
const handleTopicChange = (value) => {
  setTopics(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};
const handleSectorsChange = (value) => {
  setSectors(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};
const handleRegionsChange = (value) => {
  setRegions(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};
const handleCountryChange = (value) => {
  setCountry(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};
const handlePestsChange = (value) => {
  setPests(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};

const handleSourceChange = (value) => {
  setSource(value);
  // console.log(value);
  // console.log(selectedValue)
  // You can use the selectedValue in your logic here
};

// const handleCityChange = (value) => {
//   setCity(value);
//   // console.log(value);
//   // console.log(selectedValue)
//   // You can use the selectedValue in your logic here
// };

//console.log(regions,year,sectors,pests,source,topics,country)

  return (
    <div className="container">
      <Sidebar  
      onYearChange={handleYearChange}
      onTopicChange={handleTopicChange}
      onSectorChange={handleSectorsChange}
      onRegionChange={handleRegionsChange}
      onCountryChange={handleCountryChange}
      onPestsChange={handlePestsChange}
      onSourceChange={handleSourceChange}
      // onCityChange={handleCityChange}
      dropboxdata={data} 
      
      />
      <div className="content-container">
        <div className="carouselSection">
          <div className="carousel">
            <h2>Sectors</h2>
            <ChartComponent data={barChartData} chartData={data} id={"barChart"} type={"bar"}  />
          </div>

          <div className="graph">
            <h2>likelihood</h2>
            <ChartComponent
              data={lineChartData}
              id={"lineChart"}
              type={"line"}
            />
          </div>
        </div>
       
       
        <div className="carouselSection">
        <div className="carousel">
            <h2>Country</h2>
            <ChartComponent data={pieChartData} id={"barChart3"} type={"pie"}  />
          </div>

          <div className="graph">
            <h2>Pestle</h2>
            <ChartComponent
              data={lineChartData2}
              id={"lineChart3"}
              type={"doughnut"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
