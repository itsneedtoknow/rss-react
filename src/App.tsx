import { useEffect, useState, type SubmitEvent } from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";
import { SearchItems } from "./data/searchItems";
//import { Outlet } from "react-router-dom";
import { type SearchItem } from "./data/searchItems";
import { Button } from "./UI/Button";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Pagination } from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
const BuggyComponent = ({ isbuggy }: { isbuggy: boolean }) => {
  if (isbuggy == true) throw new Error("💥 Some kind of error.");
  return null;
};
function App() {
  const [query, setQuery] = useState(localStorage.getItem("query") ?? "");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBuggy, setIsBuggy] = useState(false);
  const currentPage = Number(searchParams.get("page") ?? "1");
  const ITEMS_PER_PAGE: number = 2;
  const indexOfFirstPageItem = (currentPage - 1) * ITEMS_PER_PAGE;
  const indexOfLastPageItem = indexOfFirstPageItem + ITEMS_PER_PAGE;
  const handleSubmit = (e: SubmitEvent, val: string) => {
    setQuery(val);
    setSearchParams((prev) => {
      prev.set("page", "1");
      return prev;
    });
  };
  const handleLiveInputChange = (currentValue: string) => {
    setQuery(currentValue);
    setSearchParams((prev) => {
      prev.set("page", "1");
      return prev;
    });
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
  function handleBuggyClick() {
    setIsBuggy(true);
  }
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
        <SearchResults
          items={filteredResults.slice(
            indexOfFirstPageItem,
            indexOfLastPageItem,
          )}
        />
        <Pagination
          activePage={currentPage}
          totalPages={Math.ceil(filteredResults.length / ITEMS_PER_PAGE)}
        />
        <ErrorBoundary>
          <BuggyComponent isbuggy={isBuggy} />
          <Button btnText="Error btn" onClick={handleBuggyClick} />
        </ErrorBoundary>
      </section>
    </>
  );
}

export default App;
