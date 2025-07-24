import React from 'react'
import { AddPetFormWrap, AddPetTitle, AddPetTitleSpan } from './AddPetForm.styled'
import AddPetRadioGroup from './AddPetRadioGroup'

export const AddPetForm = () => {
  return (
    <AddPetFormWrap>
      <AddPetTitle>
        Add my pet /
        <AddPetTitleSpan>Personal details</AddPetTitleSpan>
      </AddPetTitle>

      <AddPetRadioGroup />

    </AddPetFormWrap>
  )
}
