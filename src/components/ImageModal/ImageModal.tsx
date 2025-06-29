import Modal from "react-modal";
import { ImageModalProps } from "../App/App.types";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, src, alt }: ImageModalProps) => {
  return (
    <Modal
      className={s.content}
      overlayClassName={s.overlay}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
