import './App.css';
import { Component } from 'react';
import { SearchResults } from './SearchResults/SearchResults'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1' },
        { name: 'name1', artist: 'artist1', album: 'album1' },
        { name: 'name1', artist: 'artist1', album: 'album1' }],
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component -->
            <!-- Add a Playlist component --> */}
            <SearchResults searchResults={this.state.searchResults}>

            </SearchResults>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
