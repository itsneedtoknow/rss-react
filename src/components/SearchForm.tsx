import { Button } from "../UI/Button";
import {
  Component,
  type ChangeEvent,
  type SubmitEvent,
  type ReactNode,
} from "react";

export class SearchForm extends Component<{
  query: string;
  onSubmit: (e: SubmitEvent<HTMLFormElement>, inputValue: string) => void;
}> {
  state = {
    inputValue: localStorage.getItem("query") ?? "",
  };
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
    if (e.target.value.trim() === "") {
      localStorage.removeItem("query");
    } else {
      localStorage.setItem("query", e.target.value);
    }
  };
  handleSubmitForm = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.inputValue);
  };
  render(): ReactNode {
    const { inputValue } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmitForm}>
        <input
          value={inputValue}
          type="search"
          placeholder="Type to search"
          onChange={this.handleInputChange}
        />
        <Button btnText={"Search"} btnType={"submit"} />
      </form>
    );
  }
}
