import { type SearchItem } from "../data/searchItems";

export function ResultItem({ id, name, description }: SearchItem) {
  return (
    <li className="result__item" id={id}>
      <h4>{name}</h4>
      <p>{description}</p>
    </li>
  );
}
