import { Component, type ReactNode, type SubmitEvent } from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";
import { SearchItems } from "./data/searchItems";

class App extends Component {
  state = {
    query: localStorage.getItem("query") ?? "",
    filteredResults: [],
  };
  componentDidMount() {
    this.handleFilter(this.state.query);
  }
  handleSubmit = (e: SubmitEvent<HTMLFormElement>, newQuery: string) => {
    this.setState({ query: newQuery });
    this.handleFilter(newQuery);
  };
  handleFilter = (searchQuery: string) => {
    const filtered = SearchItems.filter((item) => {
      if (searchQuery.trim() === "") {
        return true;
      }
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    this.setState({ filteredResults: filtered });
  };
  handleLiveInputChange = (currentValue: string) => {
    this.setState({ query: currentValue });
    this.handleFilter(currentValue);
  };
  render(): ReactNode {
    const { query } = this.state;
    return (
      <>
        <section className="search-section search">
          <div className="search__form">
            <div className="container-wrapper">
              <SearchForm
                onSubmit={this.handleSubmit}
                query={query}
                onInputChange={this.handleLiveInputChange}
              />
            </div>
          </div>

          <SearchResults items={this.state.filteredResults} />
        </section>
      </>
    );
  }
}

export default App;
