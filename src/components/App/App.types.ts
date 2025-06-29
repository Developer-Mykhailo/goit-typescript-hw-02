import { ReactNode } from "react";

export type TypePhoto = {
  id: string;
  src: string;
  alt?: string;
};

export type TypeChildren = {
  children: ReactNode;
};

export type TypeError = {
  error: string | boolean;
};

export type ImageCardProps = {
  data: {
    urls: { small: string; regular: string };
    alt_description: string;
  };
  openModal: (args: { src: string; alt?: string }) => void;
};
