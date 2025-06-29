import s from "./Container.module.css";

import { Children } from "../App/App.types";

const Container = ({ children }: Children) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
