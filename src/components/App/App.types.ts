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
