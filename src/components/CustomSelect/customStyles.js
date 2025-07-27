export const customStyles = (theme, addPet = false) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.SelectControlBGColor,
    borderRadius: "30px",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.25,
    boxShadow: state.isFocused ? "none" : "none",
    width: "100%",
    height: "42px",
    // borderColor: theme.colors.SelectControlBorderColor,
    borderColor: addPet ? theme.colors.SelectControlBorderColorSecondary : theme.colors.SelectControlBorderColor,
    cursor: "pointer",
    transition: "border-color 300ms ease",

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
      height: addPet ? "52px" : "48px",
    },

    "&:hover": {
      // borderColor: theme.colors.SelectControlBorderHoverColor,
      borderColor: addPet ? "#f6b83d" : theme.colors.SelectControlBorderHoverColor,
    },
  }),
  container: (provided) => ({
    ...provided,
    padding: 0,
  }),
  input: (provided) => ({
    ...provided,
    color: theme.colors.SelectInputColor,
    fontSize: "14px",
    margin: 0,
    padding: 0,

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.colors.SelectSingleValueColor,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.25,
    padding: "0 0 0 8px",
    margin: 0,

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    // color: theme.colors.SelectInputPlaceholderColor,
    color: addPet ? theme.colors.SelectInputPlaceholderColorSecondary : theme.colors.SelectInputPlaceholderColor,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.25,
    padding: "0 0 0 8px",
    margin: 0,

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.SelectMenuBGColor,
    borderRadius: "14px",
    paddingRight: "10px",
    border: addPet ? `1px solid rgba(38, 38, 38, 0.15)` :  theme.colors.SelectMenuBorderColor,
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0)", 
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: addPet ? "80px" : "120px",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: "8px",
      paddingRight: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.colors.SelectScrollThumbBGColor,
      borderRadius: "10px",
      margin: "14px 8px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      borderRadius: "10px",
      margin: "14px 8px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? theme.colors.SelectOptionFocusColor
      : theme.colors.SelectOptionColor,
    backgroundColor: state.isFocused
      ? "transparent"
      : state.isSelected
      ? "transparent"
      : "transparent",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.25,
    "&:active": {
      backgroundColor: "transparent",
    },
    cursor: "pointer",
    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    padding: "0 14px",
    color: theme.colors.SelectDropdownIndicatorColor,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    padding: "0",
    cursor: "pointer",
    display: state.selectProps.hideIndicators ? "none" : "flex",
  }),
});
