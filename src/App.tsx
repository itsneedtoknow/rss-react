import { useEffect, useState, type SubmitEvent } from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";
import { SearchItems } from "./data/searchItems";
import { type SearchItem } from "./data/searchItems";
import { Button } from "./UI/Button";
import { ErrorBoundary } from "./components/ErrorBoundary";
const BuggyComponent = () => {
  throw new Error("💥 Some kind of error.");
};
function App() {
  const [query, setQuery] = useState(localStorage.getItem("query") ?? "");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const handleSubmit = (e: SubmitEvent, val: string) => {
    setQuery(val);
  };
  const handleLiveInputChange = (currentValue: string) => {
    setQuery(currentValue);
  };
  useEffect(() => {
    const handleFilter = (searchQuery: string) => {
      const filtered = SearchItems.filter((item) => {
        if (searchQuery.trim() === "") {
          return true;
        }
        return (
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredResults(filtered);
    };
    handleFilter(query);
  }, [query]);
  return (
    <>
      <section className="search-section search">
        <div className="search__form">
          <div className="container-wrapper">
            <SearchForm
              onSubmit={handleSubmit}
              query={query}
              onInputChange={handleLiveInputChange}
            />
          </div>
        </div>
        <SearchResults items={filteredResults} />
        <ErrorBoundary>
          <BuggyComponent />
          <Button btnText="Error btn" />
        </ErrorBoundary>
      </section>
    </>
  );
}

export default App;
