import React from 'react';
import './App.css';
import SearchWrapper from './components/searchWrapper';
import Content from './components/content';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleSubmitClick = (value) => {
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <div className="App">
        <SearchWrapper onSubmitClick={this.handleSubmitClick} />
        <Content searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
