import React, { Component } from 'react';
import './style.css';
import { API_KEY } from '../constant/index.js';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.fetchImages(nextProps.searchTerm);
    }
  }

  fetchImages = (query) => {
    if (!query) {
      query = 'highlights';
    }
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`)
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

  myFunction = (index) => {
    const { gifs } = this.state;
    let copyText = gifs[index].url;
    navigator.clipboard.writeText(copyText);
  };

  render() {
    return (
      <div className="gifs-wrapper">
        {this.state.gifs.map((gif, index) => {
          return (
            <div key={`${index}-gif`} className="column-6">
              <img src={gif.images.original.url} alt="Gif" />
              <button className="copy-btn" onClick={() => this.myFunction(index)}>
                Copy Url
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Content;
