import { Component, type MouseEvent } from "react";

export class Button extends Component<{
  btnText: string;
  btnType?: "submit" | "button" | "reset";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}> {
  render() {
    const { btnText, btnType, onClick } = this.props;
    return (
      <button type={btnType} onClick={onClick}>
        {btnText}
      </button>
    );
  }
}
