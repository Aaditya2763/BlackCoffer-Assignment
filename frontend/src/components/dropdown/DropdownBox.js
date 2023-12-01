import React, { useState } from 'react';
import './Dropdown.css'; // Import the external CSS file

const DropdownBox = ({ optionBoxHandler, title, data, displaydata, onDropdownChange }) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onDropdownChange(selectedValue);
  };


  return (
    <>
      {optionBoxHandler && (
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="dropdown-select"
        >
          <option value="option1" className="options">
            {title}
          </option>
          {data.map((item, index) => (
            <option key={index} className="options" value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default DropdownBox;
