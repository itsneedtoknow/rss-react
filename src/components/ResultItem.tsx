import { Component, type ReactNode } from "react";
import { type SearchItem } from "../data/searchItems";

export class ResultItem extends Component<SearchItem> {
  render(): ReactNode {
    const { id, name, description } = this.props;
    return (
      <li className="result__item" id={id}>
        <h4>{name}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
