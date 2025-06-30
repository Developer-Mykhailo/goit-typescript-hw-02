import { ReactNode } from "react";

export type TypePhoto = {
  id: string;
  src: string;
  alt: string;
  urls: { small: string; regular: string };
  alt_description: string;
};

export type TypeChildren = {
  children: ReactNode;
};

export type TypeError = {
  error: string | boolean;
};

type OpenModal = (args: Partial<TypePhoto>) => void;

export type ImageGalleryProps = {
  photos: TypePhoto[];
  openModal: OpenModal;
};

export type ImageCardProps = {
  data: Pick<TypePhoto, "urls" | "alt_description">;
  openModal: OpenModal;
};

export type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src?: string;
  alt?: string;
};

export type LoadMoreBtnProps = {
  onClick: () => void;
};

export type Search = {
  onSubmit: (query: string) => void;
};

export type UnsplashAPIResponse = {
  total: number;
  total_pages: number;
  results: TypePhoto[];
};
