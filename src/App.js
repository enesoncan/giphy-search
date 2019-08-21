import React from "react";
import "./App.css";
import SearchWrapper from "./components/searchWrapper";
import Content from "./components/content";
import Contact from "./components/contact";
import Nav from "./components/navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  handleSubmitClick = value => {
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" exact>
              <SearchWrapper onSubmitClick={this.handleSubmitClick} />
              <Content searchTerm={this.state.searchTerm} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
