import axios from "axios";
import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { useTheme } from "styled-components";
import { customStyles } from "../CustomSelect/customStyles";
import Icon from "../Icon/Icon";
import { LocationSelectIconWrap } from "./LocationSelect.styled";
import { ResetBtn } from "../SearchField/SearchField.styled";
import { useDispatch } from "react-redux";
import { setLocation, setLocationId } from "../../redux/filters/filtersSlice";
import { setFilterTerm } from "../../redux/pets/petsSlice";
import { API_URL } from "../../config/apiConfig";

const CustomControl = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const { selectProps } = props;

  const onReset = () => {
    dispatch(setLocation(""));
    dispatch(setLocationId(""));
    dispatch(setFilterTerm(""));
    selectProps.onInputChange("");
    selectProps.onChange(null);
  };

  return (
    <components.Control {...props}>
      {children}

      {(selectProps.value || selectProps.inputValue) && (
        <ResetBtn $location type="button" onClick={onReset}>
          <Icon height={18} width={18} name="icon-cross-small" />
        </ResetBtn>
      )}

      <LocationSelectIconWrap>
        <Icon name="icon-search" width={18} height={18} />
      </LocationSelectIconWrap>
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
