import React, { Component } from 'react';
import './style.css';
import copy_icon from '../../copy.png';
import spinner from '../../grey_spinner.gif';
import { API_KEY } from '../constant/index.js';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      isLoaded: true,
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
        this.setState({
          isLoaded: false,
        });
      });
    this.setState({
      isLoaded: true,
    });
    console.log(this.state.isLoaded);
  };

  onCopy = (index) => {
    const { gifs } = this.state;
    let copyText = gifs[index].url;
    navigator.clipboard.writeText(copyText);
  };

  render() {
    return (
      <div className="gifs-wrapper">
        {this.state.isLoaded || !this.state.gifs ? (
          <div className="loading">
            <img src={spinner} alt="Loading Spinner" />
          </div>
        ) : (
          this.state.gifs.map((gif, index) => {
            return (
              <div key={`${index}-gif`} className="column-6">
                <img className="gif" src={gif.images.original.url} alt="Gif" />
                <button className="copy-btn" onClick={() => this.onCopy(index)}>
                  <img src={copy_icon} alt="Copy Icon" />
                  <span>Copy Url</span>
                </button>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
export default Content;
