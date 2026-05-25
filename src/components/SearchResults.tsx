import { ResultItem } from "./ResultItem";
import { type SearchItem } from "../data/searchItems";

interface SearchResultsProps {
  items: SearchItem[];
}
export function SearchResults({ items }: SearchResultsProps) {
  if (items.length > 0) {
    return (
      <div className="search__result">
        <div className="container-wrapper">
          <h2>Results</h2>
          <ul className="result__list">
            {items.map((item) => {
              return (
                <ResultItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search__result">
        <div className="container-wrapper">
          <p className="no-results">No items found matching your search.</p>
        </div>
      </div>
    );
  }
}
