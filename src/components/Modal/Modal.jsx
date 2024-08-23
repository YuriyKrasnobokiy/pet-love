import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modal/modalSlice";
import Icon from "../Icon/Icon";
import { CloseBtn, ModalOverlay, ModalStyled } from "./Modal.styled";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [dispatch]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeModal());
    }
  };

  const handleCloseClick = () => {
    dispatch(closeModal());
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalStyled>
        <CloseBtn onClick={handleCloseClick} type="button">
          <Icon name="icon-cross-small" width={24} height={24} />
        </CloseBtn>
        {children}
      </ModalStyled>
    </ModalOverlay>
  );
};
