import { ReactNode } from "react";

export type Photo = {
  id: string;
  src: string;
  alt?: string;
};

export type Children = {
  children: ReactNode;
};
