export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "30px",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.25,
    boxShadow: state.isFocused ? "none" : "none",
    width: "100%",
    height: "42px",
    borderColor: "transparent",
    cursor: "pointer",

    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
      letterSpacing: "-0.03em",
      height: "48px",
    },

    "&:hover": {
      borderColor: "transparent",
    },
  }),
  container: (provided) => ({
    ...provided,
    padding: 0,
  }),
  input: (provided) => ({
    ...provided,
    color: "#121417",
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
    color: "#262626",
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
    color: "#262626",
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
    backgroundColor: "#fff",
    borderRadius: "14px",
    paddingRight: "10px",
    border: "none", // Прибираємо бордер
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0)", // Додаємо прозору тінь як заміну бордеру
  }),
  menuList: (provided) => ({
    ...provided,

    "&::-webkit-scrollbar": {
      width: "8px",
      paddingRight: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f3f3f3",
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
    color: state.isFocused ? "#f6b83d" : "#7d7d7d",
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
    color: "#262626",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: "0",
    cursor: "pointer",
  }),
};
