import type { LoadMoreBtnProps } from "../App/App.types";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} className={s.load_more}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
