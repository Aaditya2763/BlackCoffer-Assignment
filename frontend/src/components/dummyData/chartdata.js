// chartData.js

export const barChartData = {
    labels: [ 'Automotive','Aerospace & defence', 'Construction', 'Energy', 'Environment', 'Financial services', 'Food & agriculture', 'Government', 'Healthcare', 'Information Technology', 'Manufacturing', 'Retail', 'Support services', 'Tourism & hospitality'],
    datasets: [
      {
        label: 'Intensity',
        data: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,95,95,100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export const lineChartData = {
    labels: ['Angola', 'Argentina', 'Australia', 'Austria', 'Azerbaijan', 'Brazil', 'Burkina Faso', 'Canada', 'China', 'Colombia', 'Egypt', 'Estonia', 'Germany', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Japan', 'Kuwait', 'Lebanon', 'Libya', 'Mali', 'Mexico', 'Morocco', 'Niger', 'Nigeria', 'Russia', 'Saudi Arabia', 'South Africa', 'South Sudan', 'Spain', 'Ukraine', 'United Kingdom', 'United States of America', 'Venezuela'],
    datasets: [
      {
        label: 'likelihood',
        data: [1,2,3,4,2,6,8,2,7,1,6,9,5,9,7,1,10,4,8,9,2,5,2,8,4,6,8,2,7,5,3,3,6,7,8,9,10],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };
 
  export const pieChartData = {
    labels: [
      "Africa",
    "Asia",
    "Central Africa",
    "Central America",
    "Central Asia",
    "Eastern Africa",
    "Eastern Asia",
    "Eastern Europe",
    "Europe",
    "Northern Africa",
    "Northern America",
    "Northern Europe",
    "Oceania",
    "South America",
    "South-Eastern Asia",
    "Southern Africa",
    "Southern Asia",
    "Southern Europe",
    "Western Africa",
    "Western Asia",
    "Western Europe",],
    datasets: [
      {
        label: 'likelihood',
        data: [2,4,1,3,6,8,5,7,10,9,1,3,2,4,5,7,6,8,9,10,3,5],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor:[
          "rgba(15, 76, 129, 0.9)",
          "rgba(84, 37, 75, 0.8)",
          "rgba(123, 53, 33, 0.85)",
          "rgba(26, 89, 119, 0.75)",
          "rgba(57, 128, 67, 0.7)",
          "rgba(134, 29, 154, 0.8)",
          "rgba(94, 74, 38, 0.9)",
          "rgba(68, 92, 124, 0.85)",
          "rgba(176, 96, 64, 0.7)",
          "rgba(15, 130, 144, 0.75)",
          "rgba(112, 82, 55, 0.8)",
          "rgba(33, 56, 90, 0.9)",
          "rgba(57, 62, 72, 0.8)",
          "rgba(206, 17, 38, 0.85)",
          "rgba(190, 144, 32, 0.75)",
          "rgba(245, 121, 33, 0.7)",
          "rgba(120, 150, 63, 0.8)",
          "rgba(206, 107, 49, 0.9)",
          "rgba(28, 43, 95, 0.85)",
          "rgba(154, 31, 90, 0.8)",
          "rgba(79, 57, 89, 0.75)",
          "rgba(92, 128, 146, 0.7)"
        ],
        borderWidth: 2,
      },
    ],
  };
 
  const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels =  ['economic', 'environmental', 'healthcare', 'industries', 'lifestyle', 'organistaion','politics','social','technology']
export const lineChartData2 = {
  labels: labels,
  datasets: [
    {
      label: 'Intensity',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
    
  ],
};