import React, { useState } from "react";
import Select from "react-select";

export const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};
