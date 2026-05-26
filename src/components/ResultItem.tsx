import { type SearchItem } from "../data/searchItems";
import { Link } from "react-router-dom";

export function ResultItem({ id, name, description, link }: SearchItem) {
  return (
    <li className="result__item" id={id}>
      <h4>
        <Link to={link || "/"}>{name}</Link>
      </h4>
      <p>{description}</p>
    </li>
  );
}
