import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";
import { Search } from "../App/App.types";

const SearchBar = ({ onSubmit }: Search) => {
  const [inputValue, setInputValue] = useState("");

  //handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return toast.error("Enter some query");
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  //JSX
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
        />
        <button type="submit">
          <CiSearch className={s.icon} />
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
