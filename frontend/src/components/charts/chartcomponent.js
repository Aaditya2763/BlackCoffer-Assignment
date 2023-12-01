// ChartComponent.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({data,id,type}) => {
  // Create a ref to hold the chart instance
  const chartRef = useRef(null);
  
  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById(`${id}`).getContext('2d');

    // Define your data
    const dataset=data;
    

    // Destroy the existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create the chart and store it in the ref
    chartRef.current = new Chart(ctx, {
      type: `${type}`,
      data: dataset,
     
    });
  }, []);
 

  return (
    <div>
      <canvas id={id}></canvas>
    </div>
  );
};

export default ChartComponent;
