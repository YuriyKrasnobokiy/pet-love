import axios from "axios";
import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { useTheme } from "styled-components";
import { API_URL } from "../../redux/pets/petsOperations";
import { customStyles } from "../CustomSelect/customStyles";
import Icon from "../Icon/Icon";
import { useDeviceType } from "../../hooks/useDeviceType";

const CustomControl = ({ children, ...props }) => {
  const deviceType = useDeviceType();
  const theme = useTheme();
  return (
    <components.Control {...props}>
      {children}
      <div
        style={{
          marginRight:
            deviceType === "desktop"
              ? "14px"
              : deviceType === "tablet"
              ? "14px"
              : "12px",
          color: theme.colors.accentColor,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon name="icon-search" width={18} height={18} />
      </div>
    </components.Control>
  );
};

export const LocationSelect = ({ handleOptionChange, selectedOpt }) => {
  const theme = useTheme();

  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(
        `${API_URL}cities?keyword=${inputValue}`,
      );
      const fetchedOptions = response.data.map((option) => ({
        value: option._id,
        label: `${option.stateEn}, ${option.cityEn}`,
      }));
      return fetchedOptions;
    } catch (error) {
      console.error("Error fetching options:", error);
      return [];
    }
  };

  const handleChange = (selected) => {
    if (selected) {
      handleOptionChange(selected);
    }
  };

  return (
    <AsyncSelect
      value={selectedOpt}
      onChange={handleChange}
      loadOptions={loadOptions}
      styles={customStyles(theme)}
      placeholder="Enter location"
      noOptionsMessage={() => "No options found"}
      hideIndicators
      components={{ Control: CustomControl }}
    />
  );
};
