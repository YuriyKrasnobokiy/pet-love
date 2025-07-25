import React, { useEffect, useState } from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../../components/Auth/RegistrForm/AuthForm.styled";
import { selectProfile } from "../../../redux/profile/profileSelectors";
import { addPet } from "../../../redux/profile/profileSlice";

export const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);
  console.log('profile: ', profile);
  const species = useSelector(selectSpecies);
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleBackClick = () => {
    navigate("/profile");
  };

  const addPetSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    name: yup.string().required("Pet's name is required"),
    imgURL: yup
      .string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        "Invalid image URL",
      )
      .required("Image URL is required"),
    species: yup.string().required("Species is required"),
    birthday: yup
      .string()
      .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
      .required("Birthday is required"),
    sex: yup.string().required("Sex is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      imgURL: "",
      species: "",
      birthday: "",
      sex: "",
    },
    resolver: yupResolver(addPetSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Valid form data:", data);
      dispatch(addPet(data))
      reset();
      setSelectedOpt(null);
      navigate('/profile')
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchSpecies());
  }, [dispatch]);
  return (
    <AddPetFormWrap onSubmit={handleSubmit(onSubmit)}>
      <AddPetTitle>
        Add my pet /<AddPetTitleSpan>Personal details</AddPetTitleSpan>
      </AddPetTitle>

      <InputWrapper>
        <AddPetRadioGroup
          register={register}
          setValue={setValue}
          watch={watch}
        />
        <ErrorMessage className="addPet">{errors.sex?.message}</ErrorMessage>
      </InputWrapper>

      <AddPetPhoto watch={watch} register={register} errors={errors} />

      <AddPetInputsWrap>
        <InputWrapper>
          <AddPetInput
            {...register("title")}
            name="title"
            placeholder="Title"
            type="text"
          />
          <ErrorMessage className="addPet">
            {errors.title?.message}
          </ErrorMessage>
        </InputWrapper>

        <InputWrapper>
          <AddPetInput
            {...register("name")}
            name="name"
            placeholder="Pet’s Name"
            type="text"
          />
          <ErrorMessage className="addPet">{errors.name?.message}</ErrorMessage>
        </InputWrapper>
        <DateTypeWrap>
          <InputWrapper>
            <IconWrapper>
              <LuCalendar />
            </IconWrapper>
            <AddPetInput
              {...register("birthday")}
              className="date"
              name="birthday"
              placeholder="0000-00-00"
              type="text"
            />
            <ErrorMessage className="addPet">
              {errors.birthday?.message}
            </ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <CustomSelect
              addPet
              options={species}
              placeholder="Pet type"
              handleOptionChange={(selected) => {
                setValue("species", selected.value, { shouldValidate: true });
                setSelectedOpt(selected);
              }}
              selectedOpt={selectedOpt}
            />
            <ErrorMessage className="addPet">
              {errors.species?.message}
            </ErrorMessage>
          </InputWrapper>
        </DateTypeWrap>
      </AddPetInputsWrap>
      <BtnsWrap>
        <AddPetFormBtn onClick={handleBackClick} className="back">
          Back
        </AddPetFormBtn>
        <AddPetFormBtn type="submit" className="submit">
          Submit
        </AddPetFormBtn>
      </BtnsWrap>
    </AddPetFormWrap>
  );
};
