import s from "./Container.module.css";

import { TypeChildren } from "../App/App.types";

const Container = ({ children }: TypeChildren) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
