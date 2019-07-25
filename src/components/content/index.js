import React, { Component } from 'react';
import './style.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchImages('');
  }

  fetchImages = (query) => {
    if (!query) {
      query = 'sponge bob';
    }
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=AzgDQDYFJ1PW4UjxbftbWXBQC0ZSwbPh&q=${query}`)
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const gifs = json.data;
        this.setState({
          gifs,
        });
      });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.fetchImages(nextProps.searchTerm);
    }
  }

  render() {
    return (
      <div className="gifs-wrapper">
        {this.state.gifs.map((gif, index) => {
          return (
            <div key={`${index}-gif`} className="column-6">
              <img src={gif.images.original.url} alt="Gif" />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Content;
