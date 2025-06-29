import { ImageGalleryProps } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

//JSX
const ImageGallery = ({ photos, openModal }: ImageGalleryProps) => {
  return (
    <ul className={s.list}>
      {photos.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard data={{ urls, alt_description }} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
