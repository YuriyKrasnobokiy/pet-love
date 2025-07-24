import React from 'react'
import { PetBlock } from '../../components/Auth/PetBlock/PetBlock'
import addPetImgDesktop from "../../assets/imgs/desctop/add-pet-img-2x-desc.jpg";
import addPetImgTablet from "../../assets/imgs/tablet/add-pet-img-2x-tablet.jpg";
import addPetImgMobile from "../../assets/imgs/mobile/add-pet-img-2x-mob.jpg";
import { AddPetWrap } from './AddPet.styled';
import { useDeviceType } from '../../hooks/useDeviceType';
import { AddPetForm } from './AddPetForm/AddPetForm';
const AddPet = () => {
  const deviceType = useDeviceType();
  return (
    <AddPetWrap>
      <PetBlock imageUrl={
                deviceType === "desktop"
                  ? addPetImgDesktop
                  : deviceType === "tablet"
                  ? addPetImgTablet
                  : addPetImgMobile
              }/>
      <AddPetForm />
    </AddPetWrap>
  )
}

export default AddPet