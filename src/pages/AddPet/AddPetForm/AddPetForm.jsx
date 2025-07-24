import React, { useEffect } from "react";
import {
  AddPetFormBtn,
  AddPetFormWrap,
  AddPetInput,
  AddPetInputsWrap,
  AddPetTitle,
  AddPetTitleSpan,
  BtnsWrap,
  DateTypeWrap,
  IconWrapper,
  InputWrapper,
} from "./AddPetForm.styled";
import AddPetRadioGroup from "./AddPetRadioGroup";
import { AddPetPhoto } from "./AddPetPhoto";
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { selectSpecies } from "../../../redux/pets/petsSelectors";
import { fetchSpecies } from "../../../redux/pets/petsOperations";
import { LuCalendar } from "react-icons/lu";

export const AddPetForm = () => {
  const dispatch = useDispatch();
  const species = useSelector(selectSpecies);

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);
  return (
    <AddPetFormWrap>
      <AddPetTitle>
        Add my pet /<AddPetTitleSpan>Personal details</AddPetTitleSpan>
      </AddPetTitle>

      <AddPetRadioGroup />

      <AddPetPhoto />
      <AddPetInputsWrap>
        <AddPetInput name="title" placeholder="Title" type="text" />
        <AddPetInput name="name" placeholder="Pet’s Name" type="text" />
        <DateTypeWrap>
          <InputWrapper>
            <IconWrapper >
              <LuCalendar />
            </IconWrapper>
            <AddPetInput
              className="date"
              name="date"
              placeholder="00.00.0000"
              type="text"
            />
          </InputWrapper>

          <CustomSelect
            addPet
            options={species}
            placeholder="Pet type"
            handleOptionChange={() => {}}
            selectedOpt={() => {}}
          />
        </DateTypeWrap>
      </AddPetInputsWrap>
      <BtnsWrap>
        <AddPetFormBtn className="back">Back</AddPetFormBtn>
        <AddPetFormBtn className="submit">Submit</AddPetFormBtn>
      </BtnsWrap>
    </AddPetFormWrap>
  );
};
