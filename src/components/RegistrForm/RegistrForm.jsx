import React from "react";
import {
  RegDescr,
  RegFormWrap,
  RegInput,
  RegTitle,
} from "./RegistrForm.styled";

export const RegistrForm = () => {
  return (
    <RegFormWrap>
      <RegTitle>Registration</RegTitle>
      <RegDescr>Thank you for your interest in our platform</RegDescr>
      <form action="">
        <div>
          <RegInput type="text" placeholder="Name" />
          <RegInput type="email" placeholder="Email" />
          <RegInput type="password" placeholder="Password" />
          <RegInput type="password" placeholder="ConfirmPassword" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </RegFormWrap>
  );
};
