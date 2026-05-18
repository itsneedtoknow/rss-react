import { Component, type ReactNode, type SubmitEvent } from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";

class App extends Component {
  state = {
    query: "",
  };
  handleSubmit = (e: SubmitEvent<HTMLFormElement>, newQuery: string) => {
    this.setState({ query: newQuery });
    console.log(newQuery);
  };
  render(): ReactNode {
    const { query } = this.state;
    return (
      <>
        <section>
          <div className="search__form">
            <div className="container-wrapper">
              <SearchForm onSubmit={this.handleSubmit} query={query} />
            </div>
          </div>
          <div className="search__result">
            <div className="container-wrapper">
              <h2>Results</h2>
              <ul className="result__list">
                <li className="result__item">
                  <h3 className="item__name">Item name</h3>
                  <div className="item__description">
                    <p>description</p>
                    <p>more description</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
