import { Button } from "../UI/Button";
import { type ChangeEvent, type SubmitEvent, useState } from "react";

export function SearchForm({
  query,
  onInputChange,
  onSubmit,
}: {
  query: string;
  onInputChange: (inputValue: string) => void;
  onSubmit: (e: SubmitEvent<HTMLFormElement>, inputValue: string) => void;
}) {
  const [inputValue, setInputValue] = useState(query);

  const handleSubmitForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e, inputValue);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      localStorage.removeItem("query");
    } else {
      localStorage.setItem("query", e.target.value);
    }
  };
  return (
    <form action="" onSubmit={handleSubmitForm}>
      <input
        value={inputValue}
        type="search"
        placeholder="Type to search"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <Button btnText={"Search"} btnType={"submit"} />
    </form>
  );
}
